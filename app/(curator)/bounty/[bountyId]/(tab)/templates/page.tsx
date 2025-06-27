"use client";

import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams } from "next/navigation";

type Template = {
	name: string;
	response: number;
	updated: string;
	status?: boolean;
};

const items: Template[] = [
	{
		name: "Extraordinary Event",
		response: 58,
		updated: "08 May 2025",
		status: true,
	},
	{
		name: "Meetup",
		response: 16,
		updated: "08 May 2025",
		status: false,
	},
	{
		name: "Key Industry Event",
		response: 26,
		updated: "08 May 2025",
		status: true,
	},
];

export default function Templates() {
	const params = useParams<{ bountyId: string }>();
	return (
		<Shell variant={"tab"}>
			<div className="flex items-center justify-between ">
				<Button asChild>
					<Link href={`/bounty/${params.bountyId}/form/new`}>
						<Icons.add /> New Template
					</Link>
				</Button>

				<div className="">
					<Button variant={"outline"} className="rounded font-normal">
						<Icons.Calendar /> Date Created <Icons.arrowDown />
					</Button>
				</div>
			</div>

			<Separator className="-mt-4" />

			<div className="grid w-full gap-2">
				<div className="grid grid-cols-[1fr_auto_auto_auto] gap-7 px-4 font-light text-[#808080] text-xs">
					<div />
					<div className="">Responses</div>
					<div className="">Updated</div>
					<div className="w-8" />
				</div>
				<TemplateListItem
					name="Event organizer application form"
					response={60}
					updated="08 May 2025"
				/>
			</div>

			<div className="grid w-full gap-2">
				<div className="grid grid-cols-[1fr_auto_auto_auto] gap-7 px-4 font-light text-[#808080] text-xs">
					<div />
					<div className="">Responses</div>
					<div className="">Updated</div>
					<div className="w-8" />
				</div>
				{items.map((item) => (
					<TemplateListItem
						key={item.name}
						name={item.name}
						response={item.response}
						updated={item.updated}
					/>
				))}
			</div>

			{/* <div className="flex flex-col items-center justify-center gap-10 font-medium text-base/[24px]">
				<p>You have not created any form</p>
				<Button>
					<Icons.add /> New Template
				</Button>
			</div> */}
		</Shell>
	);
}

function TemplateListItem({ name, response, updated }: Template) {
	const params = useParams<{ bountyId: string }>();

	return (
		<Link
			href={`/bounty/${params.bountyId}/form/1`}
			className="grid grid-cols-[1fr_auto_auto_auto] gap-7 rounded-[8px] border px-4 py-2.5 shadow"
		>
			<div className="font-semibold text-gray-900">{name}</div>
			<div className="text-center text-gray-900 text-sm">{response}</div>
			<div className="text-sm">{updated}</div>
			<div className="text-sm">
				<Button variant="ghost" size="sm" className="size-6 p-2">
					<Icons.MoreHorizontal className="h-4 w-4" />
					<span className="sr-only">More options</span>
				</Button>
			</div>
		</Link>
	);
}
