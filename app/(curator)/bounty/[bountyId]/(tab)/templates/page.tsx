"use client";

import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
			{/* <Tabs defaultValue="applications">
				<TabsList className="mb-3 rounded-none border-b-2 bg-[#F3F3F3]">
					<TabsTrigger
						value="applications"
						className="after:-mb-1.5 relative flex cursor-pointer items-center gap-2 self-stretch px-4 py-3 font-medium text-[14px]/[20px] tracking-[0.1px] transition-all duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-white hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-white data-[state=active]:after:bg-primary"
					>
						Applications
					</TabsTrigger>
					<TabsTrigger
						value="event"
						className="after:-mb-1.5 relative flex cursor-pointer items-center gap-2 self-stretch px-8 py-3 font-medium text-[14px]/[20px] tracking-[0.1px] transition-all duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-white hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-white data-[state=active]:after:bg-primary"
					>
						Events
					</TabsTrigger>
				</TabsList>
				<TabsContent value="applications"></TabsContent>
				<TabsContent value="event">f</TabsContent>
			</Tabs> */}
		</Shell>
	);
}

function TemplateListItem({ name, response, updated }: Template) {
	const params = useParams<{ bountyId: string }>();
	const avatar = `https://avatar.vercel.sh/${name.replace(/\s/g, "_")}?size=40`;

	return (
		<Link
			href={`/bounty/${params.bountyId}/form/1`}
			className="grid grid-cols-[1fr_auto_auto_auto] gap-7 rounded-[8px] border px-4 py-2.5 shadow"
		>
			<div className="flex items-center gap-1 font-semibold text-gray-900">
				<img src={avatar} className=" size-10 rounded" />

				{name}
			</div>
			<div className="text-center text-gray-900 text-sm">{response}</div>
			<div className="text-sm">{updated}</div>
			<div className="text-sm">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="sm" className="size-6 p-2">
							<Icons.MoreHorizontal className="h-4 w-4" />
							<span className="sr-only">More options</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Edit Template</DropdownMenuItem>
						<DropdownMenuItem>Preview Template</DropdownMenuItem>
						<DropdownMenuItem className="text-destructive">Delete Template</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</Link>
	);
}
