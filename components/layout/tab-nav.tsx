"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useParams } from "next/navigation";
import Icons from "../icons";
import { Calendar } from "lucide-react";

const items = [
	{
		title: "Curators",
		icon: Icons.UserOutlineIcon,
		path: "/",
	},
	{
		title: "Templates",
		icon: Icons.TemplateIcon,
		path: "/templates",
	},
	{
		title: "Applications",
		icon: Icons.message,
		path: "/applications",
	},
	{
		title: "Events",
		icon: Calendar,
		path: "/events",
	},
	{
		title: "Notifications",
		icon: Icons.Info,
		path: "/notifications",
	},
];

export default function TabNav() {
	const params = useParams<{ bountyId: string }>();

	return (
		<Tabs
			defaultValue={items[0].title}
			className="mt-[100px] flex items-center justify-center"
		>
			<TabsList className="mb-3 w-full max-w-[920px] rounded-none border-b-2 bg-[#F3F3F3] text-foreground">
				{items.map((item) => {
					return (
						<TabsTrigger
							key={item.title}
							value={item.title}
							className="after:-mb-1.5 relative flex cursor-pointer items-center gap-2 self-stretch px-8 py-3 font-medium text-[14px]/[20px] tracking-[0.1px] transition-all duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-white hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-white data-[state=active]:after:bg-primary"
							asChild
						>
							<Link href={`/bounty/${params.bountyId}${item.path}`}>
								<item.icon className="opacity-60" size={24} aria-hidden="true" />
								{item.title}
							</Link>
						</TabsTrigger>
					);
				})}
			</TabsList>
		</Tabs>
	);
}
