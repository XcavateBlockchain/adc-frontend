"use client";

import { useId, useState } from "react";
import { ArrowLeftIcon, CircleAlertIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from "@/context/wallet-context";
import AccountList from "./account-list";
import WalletConnectors from "./wallet-connectors";
import { useApp } from "@/context/app-context";

export const ConnectWalletButton = () => {
	const { setOpenWalletModal } = useWallet();
	const { isConnected } = useApp();

	return (
		<>
			{isConnected ? (
				<Component />
			) : (
				<Button onClick={() => setOpenWalletModal(true)}>connect wallet</Button>
			)}
		</>
	);
};

export default function ConnectWallet() {
	const { selectedWallet, openWalletModal, setOpenWalletModal } = useWallet();

	return (
		<Dialog open={openWalletModal} onOpenChange={setOpenWalletModal}>
			<DialogContent className="gap-0 p-0 px-[18px] py-4 sm:max-h-[361px] sm:max-w-[365px] sm:rounded-[8px]">
				{selectedWallet ? <AccountList /> : <WalletConnectors />}
			</DialogContent>
		</Dialog>
	);
}

export function Component() {
	const { bounty } = useApp();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"secondary"}>0x02a5...84aa</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="pb-2">
				<DropdownMenuItem
					className="cursor-pointer py-1 focus:bg-transparent focus:underline"
					asChild
				>
					<a href={`/b/${bounty?.name}`}>view APP</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
