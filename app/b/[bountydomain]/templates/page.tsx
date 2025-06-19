import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { BookCopy, MoveLeft } from "lucide-react";
import Link from "next/link";
import BountyLayout from "../components/bounty-layout";

export default function Templates() {
	const forms = [
		"BD Templates",
		"Extraordinary Event Template",
		"Key Event Template",
		"Meetups Templates",
	];

	return (
		<BountyLayout>
			<Shell className="flex flex-col items-center justify-center lg:mt-[50px] lg:pt-10 xl:px-[160px]">
				<div className="flex h-full w-full flex-col gap-11 rounded-[10px] border border-[#C5C5C5] px-12 py-10 shadow">
					<div>
						<Button variant={"ghost"} asChild size={"lg"}>
							<Link href={"/b/1"} className="">
								<MoveLeft size={24} /> Back
							</Link>
						</Button>
					</div>

					<h1 className="text-center font-bold text-[40px]">Event Form Templates</h1>

					<div className="grid grid-cols-4 gap-4">
						{forms.map((form, index) => (
							<div
								key={index}
								className="flex h-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[8px] border border-[#F3F3F3] px-10 py-10 text-center shadow transition-all duration-200 hover:border-gray-400"
							>
								<BookCopy size={16} />
								{form}
							</div>
						))}
					</div>
				</div>
			</Shell>
		</BountyLayout>
	);
}
