import Link from "next/link";
import { Button } from "../ui/button";

export default function BountyHeader() {
	return (
		<header className=" w-full bg-background">
			<div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-5 lg:px-10 xl:px-15">
				<Link href={"/"} className=" flex items-center gap-1">
					<span className="font-bold text-[28px]">EB</span>{" "}
					<span className="font-extralight text-[28px]">X</span>
					<img src="/images/logo.svg" alt="logo" className="h-[30px] w-[143px]" />
				</Link>
				<Button>connect wallet</Button>
			</div>
		</header>
	);
}
