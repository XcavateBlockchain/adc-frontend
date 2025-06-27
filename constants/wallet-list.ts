import {
	type Wallet,
	PolkadotjsWallet,
	SubWallet,
	TalismanWallet,
	EnkryptWallet,
	PolkaGate,
} from "@talismn/connect-wallets";

/**
 * @name walletList
 * @description List of supported wallets
 *
 * @returns {Wallet[]}
 */
export const walletList: Wallet[] = [
	new SubWallet(),
	new TalismanWallet(),
	new PolkadotjsWallet(),
	new EnkryptWallet(),
	new PolkaGate(),
];
