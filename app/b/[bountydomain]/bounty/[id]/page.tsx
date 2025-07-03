import { Shell } from "@/components/shell";
import BountyLayout from "../../components/bounty-layout";
import BountyForm from "./bounty-form";

export default function Page() {
	return (
		<BountyLayout>
			<Shell className="flex flex-col items-center justify-center lg:mt-[50px] lg:pt-10 xl:px-[160px]">
				<BountyForm />
			</Shell>
		</BountyLayout>
	);
}
