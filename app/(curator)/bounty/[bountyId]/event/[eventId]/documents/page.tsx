import Icons from "@/components/icons";
import { ChevronRight } from "lucide-react";

export default function Page() {
	return (
		<div className="grid grid-cols-3 gap-[25px]">
			{["contract", "Document", "Sales"].map((item) => (
				<div key={item} className="flex w-full items-start bg-[#F3F3F3] px-3.5 py-2.5">
					<Icons.TemplateIcon className="size-5" />
					<div className="w-full space-y-1 text-[14px]/[20px]">
						<span className="capitalize">{item}</span>
						<p>uploaded by John</p>
					</div>
					<ChevronRight size={20} />
				</div>
			))}
		</div>
	);
}
