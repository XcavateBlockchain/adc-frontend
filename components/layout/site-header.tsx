import { Button } from "../ui/button";

export default function SiteHeader() {
	return (
		<header className="fixed z-50 w-full bg-background">
			<div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-5 lg:px-10 lg:py-10 xl:px-15">
				<img src="/images/logo.svg" alt="logo" className="h-[30px] w-[143px]" />
				<Button>connect wallet</Button>
			</div>
		</header>
	);
}
