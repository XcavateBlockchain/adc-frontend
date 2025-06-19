import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import CuratorBountyList from "./components/curator-bounty-list";

export default function Home() {
	return (
		<Shell className="flex flex-col items-center justify-center">
			<div className="flex max-w-[648px] flex-col items-center justify-center gap-[38px] text-center">
				<h1 className="font-black text-[40px]/[100%]">
					Polkadot Bounty Application Review System
				</h1>

				<div className="flex w-full max-w-[326px] items-center justify-between rounded-[40px] border px-4 py-3 font-medium text-base/[24px]">
					Select bounty <Icons.arrowDown className="ml-auto size-6" />
				</div>
			</div>
			<CuratorBountyList shouldShowNav />
		</Shell>
	);
}
