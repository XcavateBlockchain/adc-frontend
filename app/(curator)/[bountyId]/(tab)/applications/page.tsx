import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventList from "./event-list";
import ApplicationList from "./application-list";

export default function Applications() {
	return (
		<Shell variant={"tab"}>
			<div className="flex items-center justify-end ">
				<div className="">
					<Button variant={"outline"} className="rounded font-normal">
						<Icons.Calendar /> Date Created <Icons.arrowDown />
					</Button>
				</div>
			</div>
			<Separator className="-mt-4" />
			<Tabs defaultValue="applications">
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
				<TabsContent value="applications">
					<ApplicationList />
				</TabsContent>
				<TabsContent value="event">
					<EventList />
				</TabsContent>
			</Tabs>
		</Shell>
	);
}
