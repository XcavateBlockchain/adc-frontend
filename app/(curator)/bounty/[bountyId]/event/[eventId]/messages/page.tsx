import Icons from "@/components/icons";

export default function Page() {
	return (
		<div className="space-y-[25px]">
			{[1, 2, 3, 4, 5].map((item) => (
				<div key={item} className="flex w-full items-start gap-3">
					<Icons.user size={24} />
					<div className="flex w-full flex-col gap-4">
						<div className="flex items-center gap-3">
							<span>Bob</span>
							<span>yesterday, 12:34</span>
						</div>
						<p className="font-light text-[14px]/[20px]">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
							tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
							vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
							no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
							et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum.
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
