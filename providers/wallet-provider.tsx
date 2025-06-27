"use client";

import { dotenv } from "@/constants/dotenv";
import { walletList } from "@/constants/wallet-list";
import { initPolkadot } from "@/lib/polkadot";
import type { ApiPromise, HttpProvider, WsProvider } from "@polkadot/api";
import type { Wallet, WalletAccount } from "@talismn/connect-wallets";
import { useState, type PropsWithChildren, useEffect, useCallback } from "react";
import { WalletContext } from "@/context/wallet-context";
import type { Signer } from "@polkadot/types/types";
import { web3FromSource } from "@/lib/web3-from-source";
import ConnectWallet from "@/components/wallet/inedx";
import AppProvider from "./app-provider";

export const LS_ACTIVE_ACCOUNT_ADDRESS = "activeAccountAddress";
export const LS_ACTIVE_WALLET_NAME = "activeWalletName";

export interface WalletProviderProps extends PropsWithChildren {
	appName: string;
	supportedWallets?: Wallet[];
}

export default function WalletProvider({
	appName,
	supportedWallets = walletList,
	children,
}: WalletProviderProps) {
	const [isInitializing, setIsInitializing] = useState(true);
	const [isInitialized, setIsInitialized] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isConnected, setIsConnected] = useState(false);
	const [error, setError] = useState<Error>();
	const [api, setApi] = useState<ApiPromise>();
	const [provider, setProvider] = useState<WsProvider | HttpProvider>();
	const [selectedWallet, setSelectedWallet] = useState<Wallet>();
	const [accounts, setAccounts] = useState<WalletAccount[]>([]);
	const [activeAccount, setActiveAccount] = useState<WalletAccount>();
	const [signer, setSigner] = useState<Signer>();
	const [unsubscribe, setUnsubscribe] = useState<Record<string, () => unknown>>();

	const [open, setIsOpen] = useState(false);

	// Initialize polkadot-js/api
	const initialize = async (): Promise<ApiPromise | undefined> => {
		setIsInitializing(true);
		setIsConnected(false);
		setError(undefined);

		try {
			if (api) {
				await api.disconnect();
			}
			// Create new API instance
			const _api = await initPolkadot(dotenv.XCAVATE_WS_URL);
			setApi(_api);
			setIsInitialized(true);
			setIsInitializing(false);
			return _api;
		} catch (e) {
			const message = "Error while initializing Polkadot.js API";
			console.error(message, e);
			setError(e as Error);
			setIsConnected(false);
			setApi(undefined);
			setProvider(undefined);
			setIsInitialized(false);
		}
		setIsInitializing(false);
		return undefined;
	};

	const initializeWalletFromLocalStorage = async () => {
		setIsLoading(true);

		let currentApi = api;
		// Ensure API is initialized and connected
		if (!currentApi || !currentApi.isConnected || !currentApi.registry.chainSS58) {
			currentApi = await initialize();
			if (!currentApi?.isConnected) {
				setIsLoading(false);
				return;
			}
		}

		try {
			const wallet = web3FromSource();
			setSelectedWallet(wallet);
			setSigner(wallet.signer);

			const lastActiveAccount = localStorage.getItem(LS_ACTIVE_ACCOUNT_ADDRESS);

			if (lastActiveAccount) {
				const accounts = await wallet.getAccounts(currentApi.registry.chainSS58);
				setAccounts(accounts || []);
				const foundAccount = accounts?.find(
					(acc: WalletAccount) => acc.address === lastActiveAccount,
				);
				if (foundAccount) {
					setActiveAccount(foundAccount);
				} else if (accounts && accounts.length > 0) {
					setActiveAccount(accounts[0]);
				} else {
					setActiveAccount(undefined);
				}
			}
		} catch (e) {
			console.error("Failed to initialize wallet from local storage", e);
			setError(e as Error);
		} finally {
			setIsLoading(false);
		}
	};

	// Connect to injected wallet
	// biome-ignore lint/correctness/useExhaustiveDependencies: explanation<>
	const connect = useCallback(
		async (wallet: Wallet): Promise<void> => {
			console.log(`Connecting to wallet: ${wallet.extensionName}`);
			setIsLoading(true);
			setIsConnected(false);
			setError(undefined);

			console.log(api);

			// Make sure api is initialized & connected to provider
			if (!api?.isConnected || !api.registry.chainSS58) {
				const _api = await initialize();
				if (!_api?.isConnected) {
					setIsLoading(false);
					return;
				}
			}

			console.log("initialize", wallet.extensionName);

			try {
				setSelectedWallet(wallet);
				// Enable wallet
				await wallet.enable(appName);
				localStorage.setItem(LS_ACTIVE_WALLET_NAME, wallet.extensionName);
				setSigner(wallet.signer);
				// Subscribe to accounts
				const unsub = await wallet.subscribeAccounts((accounts: WalletAccount[] = []) => {
					setAccounts(accounts || []);
					if (accounts && accounts.length > 0) {
						setActiveAccount(accounts[0]);
						localStorage.setItem(LS_ACTIVE_ACCOUNT_ADDRESS, accounts[0].address);
					} else {
						setActiveAccount(undefined);
					}
				});
				setUnsubscribe((prev = {}) => ({
					...prev,
					[wallet.extensionName]: unsub as () => unknown,
				}));
				setIsConnected(true);
				setError(undefined);
			} catch (error) {
				setError(error as Error);
				setIsConnected(false);
				setSelectedWallet(undefined);
				setAccounts([]);
				setActiveAccount(undefined);
			} finally {
				setIsLoading(false);
			}
		},
		[api, appName],
	);

	// Disconnect wallet
	const disconnect = useCallback(() => {
		setSelectedWallet(undefined);
		setAccounts([]);
		setActiveAccount(undefined);
		setIsConnected(false);
		setIsInitialized(false);
		setIsInitializing(false);
		setIsLoading(false);
		setError(undefined);
		setUnsubscribe(undefined);
		api?.disconnect();
		provider?.disconnect();
		setApi(undefined);
		setProvider(undefined);
		localStorage.removeItem(LS_ACTIVE_ACCOUNT_ADDRESS);
		localStorage.removeItem(LS_ACTIVE_WALLET_NAME);
	}, [api, provider]);

	// API Disconnection listener
	useEffect(() => {
		if (!api) return;
		const handler = () => {
			disconnect();
		};
		api?.on("disconnected", handler);
		return () => {
			api?.off("disconnected", handler);
		};
	}, [api, disconnect]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (unsubscribe) {
				for (const unsub of Object.values(unsubscribe)) {
					if (typeof unsub === "function") unsub();
				}
			}
			api?.disconnect();
			provider?.disconnect();
		};
	}, [unsubscribe, api, provider]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		initializeWalletFromLocalStorage();
	}, []);

	const contextValue = {
		isInitializing,
		isInitialized,
		isLoading,
		isConnected,
		error,
		api,
		signer,
		connect,
		disconnect,
		accounts,
		activeAccount,
		setActiveAccount,
		selectedWallet,
		setSelectedWallet,
		openWalletModal: open,
		setOpenWalletModal: setIsOpen,
		supportedWallets,
	};

	return (
		<WalletContext.Provider value={contextValue}>
			<AppProvider>
				{children}

				<ConnectWallet />
			</AppProvider>
		</WalletContext.Provider>
	);
}
