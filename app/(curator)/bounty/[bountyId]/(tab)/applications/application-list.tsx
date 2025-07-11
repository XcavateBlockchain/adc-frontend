"use client";

import { Badge } from "@/components/ui/badge";
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

export default function ApplicationList() {
	return (
		<div className="grid w-full gap-2">
			<div className="grid grid-cols-[1fr_auto_auto] gap-16 px-4 font-light text-[#808080] text-xs">
				<div />
				<span>Status</span>
				<span>Submitted</span>
			</div>
			{items.map((item) => (
				<ApplicationListItem
					key={item.name}
					name={item.name}
					response={item.response}
					updated={item.updated}
				/>
			))}
		</div>
	);
}

function ApplicationListItem({ name, updated }: Template) {
	const params = useParams<{ bountyId: string; applicationid: string }>();

	return (
		<Link
			href={`/bounty/${params.bountyId}/application/${name.replace(/\s/g, "_")}`}
			className="grid grid-cols-[1fr_auto_auto] gap-7 rounded-[8px] border px-4 py-2.5 shadow"
		>
			<div className="font-semibold">{name}</div>
			<Badge>Badge</Badge>
			<div className="text-sm">{updated}</div>
		</Link>
	);
}
