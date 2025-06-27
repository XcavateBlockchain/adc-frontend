import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page({ params }: { params: { bountyId: string; formid: string } }) {
	return (
		<Shell className="lg:mt-20 xl:px-[188px]">
			<div className="flex items-center gap-1">
				<Button variant={"link"} asChild>
					<Link href={`/bounty/${params.bountyId}/templates`}>
						<ArrowLeft /> Forms
					</Link>
				</Button>
				<span className="font-medium text-[#A3A3A3] text-[16px]">
					Event organizer application form {">"} from
				</span>
			</div>
			<div className="mt-[34px] flex w-full flex-col rounded-[10px] border px-[53px] py-10 shadow">
				<div className="grid grid-cols-1 gap-[36px]">
					<Input label="Name" type="email" placeholder="" />

					<Input label="Email address" type="email" placeholder="" />
					<Input label="How long have you been in the Polkadot eco-system?" type="text" />
					<Input label="How many events have you previously organized?" type="text" />

					<div className="mt-10 flex items-center justify-center">
						<Button>
							<Link href={`/bounty/${params.bountyId}/templates`}>Save</Link>
						</Button>
					</div>
				</div>
			</div>
		</Shell>
	);
}
