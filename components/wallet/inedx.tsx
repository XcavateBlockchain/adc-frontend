"use client";

import { useId, useState } from "react";
import { ArrowLeftIcon, CircleAlertIcon, EllipsisVertical } from "lucide-react";

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
import { Skeleton } from "../ui/skeleton";
import { formatAddress } from "@/lib/utils";

export const ConnectWalletButton = () => {
	const { activeAccount, isConnected, setOpenWalletModal } = useWallet();

	return (
		<div className="flex items-center gap-4">
			<Button
				variant={isConnected ? "secondary" : "default"}
				onClick={() => setOpenWalletModal(true)}
			>
				{isConnected && activeAccount?.address
					? formatAddress(activeAccount.address)
					: "connect wallet"}
			</Button>
			{isConnected && activeAccount?.address ? <Component /> : null}
		</div>
	);
};

export default function ConnectWallet() {
	const { isInitializing, isConnected, openWalletModal, setOpenWalletModal } = useWallet();

	if (isInitializing) {
		return (
			<div className="w-full grid-cols-1 gap-2 px-[18px] py-4">
				<Skeleton className="h-[61px] w-full" />
				<Skeleton className="h-[61px] w-full" />
				<Skeleton className="h-[61px] w-full" />
				<Skeleton className="h-[61px] w-full" />
			</div>
		);
	}

	return (
		<Dialog open={openWalletModal} onOpenChange={setOpenWalletModal}>
			<DialogContent className="gap-0 p-0 px-[18px] py-4 sm:max-h-[361px] sm:max-w-[365px] sm:rounded-[8px]">
				{isConnected ? <AccountList /> : <WalletConnectors />}
			</DialogContent>
		</Dialog>
	);
}

export function Component() {
	const { bounty } = useApp();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"secondary"} size={"icon"}>
					<EllipsisVertical className="size-6" />
				</Button>
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
