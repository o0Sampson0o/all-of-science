import { twMerge } from "tailwind-merge";

export default function TimeStamp({ className }: { className?: string }) {
	return <div className={twMerge("size-5 shrink-0 bg-gray-400 rounded-full", className)} />;
}
