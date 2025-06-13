import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icons from "@/components/icons";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const items = [
	{
		id: "1",
		name: "Alex Thompson",
		status: true,
	},
	{
		id: "2",
		name: "Sarah Chen",
		status: true,
	},
	{
		id: "3",
		name: "James Wilson",
		status: false,
	},
	{
		id: "4",
		name: "Maria Garcia",
		status: true,
	},
	{
		id: "5",
		name: "David Kim",
		status: true,
	},
	{
		id: "6",
		name: "John Brown",
		status: true,
	},
	{
		id: "7",
		name: "Jane Doe",
		status: false,
	},
	{
		id: "8",
		name: "Peter Smith",
		status: true,
	},
	{
		id: "9",
		name: "Olivia Lee",
		status: true,
	},
	{
		id: "10",
		name: "Liam Chen",
		status: false,
	},
	{
		id: "11",
		name: "Ethan Kim",
		status: true,
	},
	{
		id: "12",
		name: "Ava Brown",
		status: true,
	},
	{
		id: "13",
		name: "Lily Lee",
		status: true,
	},
	{
		id: "14",
		name: "Noah Smith",
		status: false,
	},
	{
		id: "15",
		name: "Eve Chen",
		status: true,
	},
];

export default function CuratorBountyList() {
	return (
		<div className="w-full max-w-[920px]">
			<div className="mb-4.5 flex w-full items-center gap-[9px] text-sm">
				<span>Add Curators</span>
				<Separator className="max-w-[826px]" />
			</div>

			<div className="[&>div]:max-h-[30vh]">
				<Table>
					<TableHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur-xs [&_tr]:border-b-0">
						<TableRow className="border-y-0 *:border-border-0 hover:bg-transparent [&>:not(:last-child)]:border-r-0">
							<TableHead />
							<TableHead align="center" className="text-center capitalize">
								<span>Asset-wide permissions</span>
							</TableHead>
							<TableHead />
							<TableHead />
						</TableRow>
					</TableHeader>
					<TableBody>
						{items.map((item) => {
							return (
								<TableRow key={item.id} className="border-dashed *:border-border">
									<TableCell className="font-medium text-foreground">
										<div className="flex items-center gap-3">
											<Avatar>
												<AvatarFallback>
													<Icons.user size={16} className="opacity-60" aria-hidden="true" />
												</AvatarFallback>
											</Avatar>
											<span className="font-medium">{item.name}</span>
										</div>
									</TableCell>
									<TableCell className="text-right">
										<div className="relative flex items-center gap-3">
											<label htmlFor="terms">Manager</label>
											<Checkbox id={item.name} />
										</div>
									</TableCell>
									<TableCell>
										<Button variant={"ghost"}>
											<Icons.message />
										</Button>
									</TableCell>
									<TableCell className="text-right">
										<Button variant={"ghost"}>
											<Icons.circleX />
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
			<Button variant={"secondary"} className="mt-[30px]">
				<Icons.add className="" aria-hidden="true" />
				Add Curator
			</Button>

			<div className="flex items-center justify-center">
				<Button>Continue</Button>
			</div>
		</div>
	);
}
