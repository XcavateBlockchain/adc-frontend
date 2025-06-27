import { isWalletInstalled, type Wallet } from "@talismn/connect-wallets";
import { Button } from "../ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import { useWallet } from "@/context/wallet-context";
import { useApp } from "@/context/app-context";

export default function WalletConnectors() {
	const { supportedWallets } = useWallet();

	return (
		<>
			<DialogHeader className="mb=3.5 mt-6 gap-0.5">
				<DialogTitle className="sm:text-center">Connect wallet</DialogTitle>
				<DialogDescription className="sm:text-center">
					Select a wallet to connect
				</DialogDescription>
			</DialogHeader>
			<div className="overflow-y-auto">
				<div className="flex flex-col gap-2">
					{supportedWallets.map((wallet) => (
						<WalletConnector key={wallet.extensionName} {...wallet} />
					))}
				</div>
			</div>
		</>
	);
}

function WalletConnector({ ...wallet }: Wallet) {
	const { setOpenWalletModal } = useWallet();
	const { setIsConnected } = useApp();
	const installed = isWalletInstalled(wallet.extensionName);
	return (
		<div className="flex w-full items-center justify-between self-stretch px-2.5 py-2">
			<div className="flex items-center gap-2 font-medium text-[14px]/[18px]">
				<img
					src={wallet.logo.src}
					alt={wallet.logo.alt}
					className="size-6 rounded-full bg-[#D9D9D9]"
				/>
				<span>{wallet.title}</span>
			</div>
			{installed ? (
				<Button
					size={"sm"}
					onClick={() => {
						setIsConnected(true);
						setOpenWalletModal(false);
					}}
				>
					Connect
				</Button>
			) : (
				<Button variant={"link"} size={"sm"} className="text-[#A0A0A0]">
					<Link href={wallet.installUrl} target="_blank" rel="noopener noreferrer">
						Install
					</Link>
				</Button>
			)}
		</div>
	);
}
