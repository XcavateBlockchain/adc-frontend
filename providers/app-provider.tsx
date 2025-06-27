"use client";

import React, { useCallback, useState, type ReactNode } from "react";
import { AppContext, type AppContextType } from "@/context/app-context";
import { bounties, type Bounty } from "@/constants/curators";

interface AppProviderProps {
	children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
	const [isConnected, setIsConnected] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [bounty, setBounty] = useState<Bounty | null>(null);

	// Select a bounty by name, simulate loading
	const selectBounty = useCallback((bountyName: string) => {
		setIsLoading(true);
		const timeout = setTimeout(() => {
			const found = bounties.find((b) => b.name === bountyName) || null;
			setBounty(found);
			setIsLoading(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

	const value: AppContextType = {
		isConnected,
		isLoading,
		bounties: bounties,
		bounty,
		selectBounty,
		setIsConnected,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
