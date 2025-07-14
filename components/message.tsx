"use client";

import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useWallet } from "@/context/wallet-context";
import Icons from "./icons";

export default function Messages() {
	const { isConnected } = useWallet();
	return (
		<div className="flex h-full flex-col space-y-4">
			<div className="flex-1">
				<ScrollArea className="h-[75vh] pb-0">
					<div className="space-y-[25px] px-4">
						{[1, 2, 3, 4, 5].map((item) => (
							<div key={item} className="flex w-full items-start gap-3">
								<Icons.user size={24} />
								<div className="flex w-full flex-col gap-4">
									<div className="flex items-center gap-3">
										<span>Bob</span>
										<span>yesterday, 12:34</span>
									</div>
									<p className="font-light text-[14px]/[20px]">
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
										eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
										voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
										clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
										amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
										nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
										diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
										Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.
									</p>
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</div>
			{isConnected && (
				<div className="gap-6 pb-4">
					<div className="flex w-full items-center gap-2 rounded-lg border border-foreground/[0.10] px-4 py-0 focus:outline-none">
						<Textarea
							placeholder="Write comment"
							className="min-h-12 resize-none border-0 bg-transparent px-0 py-1 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
							maxLength={2000}
						/>
						<div className="flex gap-1 divide-x-2 px-1">
							<Button variant={"ghost"} size={"icon"} type="submit">
								<Icons.SendHorizonal className="size-6" />
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
