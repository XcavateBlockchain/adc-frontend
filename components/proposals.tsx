import { ScrollArea } from "./ui/scroll-area";

export default function Proposals() {
	return (
		<div className="flex h-full flex-col space-y-4">
			<h1 className="text-center font-extrabold text-[18px]/[26px]">
				Web3 Education, Innovation & Opportunities{" "}
			</h1>
			<div className="flex-1">
				<ScrollArea className="h-[75vh] pb-0">
					<div className="grid grid-cols-1 gap-8 [&>div]:max-h-[50vh]">
						{[1, 2, 3, 4, 5, 6, 7].map((item) => (
							<div key={item} className="flex flex-col gap-2">
								<h2 className="font-medium text-[16px]/[28px]">Summary of proposal</h2>
								<p className="font-extralight text-[16px]/[28px]">
									To deliver a high impact immersive event at the House of Lords (Cholmondeley
									Room) in October 2025 to bring together MPs, Lords, Policy Makers,
									Universities, Industry & Tech Leaders to discuss how the latest technology
									can help to solve the big issues… but it all starts with education. It will
									be a two hour (with a sit down lunch / dinner) interactive event showcasing
									how the right educational journey (from people who have been on various
									stages; senior school pupils, university students, lecturers and researchers
									& tech academy students, hackathons & businesses startups & larger global
									government collaborations) can unlock the full potential of this coming wave
									through web3 and the Polkadot network.
								</p>
							</div>
						))}
					</div>
				</ScrollArea>
			</div>
		</div>
	);
}
