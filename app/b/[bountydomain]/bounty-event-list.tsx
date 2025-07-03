"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface EventType {
	title: string;
	date: string;
	status: string;
	event: string;
	deadline: string;
	curator: string;
}

const events = [
	{
		title: "Lode turope",
		date: "May 23,2025",
		status: "Reviewing",
		event: "Extraordinary Event",
		deadline: "Jun 30 - Jul1",
		curator: "Jimmy Tudeski",
	},
	{
		title: "Polkadot at Africa...",
		date: "May 23,2025",
		status: "Reviewing",
		event: "Key Industry event",
		deadline: "May 21 - 22",
		curator: "Vickysnipe",
	},
	{
		title: "Code Europe",
		date: "May 23, 2025",
		status: "Reviewing",
		event: "Extraordinary Event",
		deadline: "Jun 30 - Jult",
		curator: "Jimmy Tudeski",
	},
	{
		title: "Code Eurooe",
		date: "May 23,2025",
		status: "Reviewing",
		event: "Extraordinary Event",
		deadline: "Jun 30 - Jul1",
		curator: "Jimmy",
	},
];

export default function EventBountyList() {
	return (
		<div className="grid w-full gap-2">
			<div className="mb-4 grid grid-cols-6 gap-16 px-4 font-light text-[#808080] text-xs">
				<span>Event</span>
				<span>Creation log</span>
				<span>Status</span>
				<span>Type of submission</span>
				<span>Date range</span>
				<span className="text-right">Submitor</span>
			</div>
			{events.map((item, index) => (
				<EventListItem key={`${item.title}-${index}`} {...item} />
			))}
		</div>
	);
}

function EventListItem({ ...item }: EventType) {
	const params = useParams<{ bountydomain: string }>();

	return (
		<Link
			href={`/b/${params.bountydomain}/bounty/${item.title}`}
			className="grid grid-cols-6 gap-7 rounded-[8px] border px-4 py-4.5 text-sm shadow transition-colors duration-200 hover:border-gray-950"
		>
			<span className="font-semibold">{item.title}</span>
			<span>{item.date}</span>
			<span>{item.status}</span>
			<span>{item.event}</span>
			<span>{item.deadline}</span>
			<span className="text-right">{item.curator}</span>
		</Link>
	);
}
