import { dotenv } from "@/constants/dotenv";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
export const rootDomain = dotenv.APP_URL || "localhost:3000";
