import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const shellVariants = cva("", {
	variants: {
		variant: {
			default:
				"container relative mx-auto w-full max-w-screen-2xl space-y-6 px-4 py-[116px] lg:px-10 xl:px-15",
		},
		// max-w-[1440px] mx-auto
	},
	defaultVariants: {
		variant: "default",
	},
});

interface ShellProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof shellVariants> {
	as?: React.ElementType;
}

/**
 * @component @name Shell
 * @description Shell container component, renders a container with children.
 * Wrapping your page with this gives consistency on all pages
 *
 *
 * @param {Object} props - Shell component props and any valid DIV attribute
 *
 */

function Shell({ className, as: Comp = "div", variant, ...props }: ShellProps) {
	return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}

export { Shell, shellVariants };
