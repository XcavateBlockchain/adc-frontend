import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWallet } from "@/context/wallet-context";
import WalletLoading from "./wallet-loading";
import { ArrowLeftIcon } from "lucide-react";

export default function AccountList() {
	const { isLoading, selectedWallet, accounts } = useWallet();
	return (
		<>
			<div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 font-medium text-[12px]/[24px]">
				<ArrowLeftIcon className="size-6" /> Back to wallet
			</div>
			<DialogHeader className="mt-12 mb-3">
				<DialogTitle className="font-medium text-[16px]/[24px] sm:text-center">
					Select an account
				</DialogTitle>
				<DialogDescription className="sr-only sm:text-center">
					Select a wallet to connect
				</DialogDescription>
			</DialogHeader>
			<div className="space-y-[6px]">
				{isLoading && selectedWallet && <WalletLoading {...selectedWallet} />}
				{accounts && accounts.length >= 1 ? (
					<div />
				) : (
					<div className="flex min-h-[127px] w-full items-center justify-center bg-[#F0F0F0]">
						<div className="flex flex-col items-center justify-center gap-1 text-center">
							<h3 className="font-medium text-[12px]/[18px]">No Accounts Connected</h3>
							<p className="font-light text-[9px]">Connect your wallet to mange accounts</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
