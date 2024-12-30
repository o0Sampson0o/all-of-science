import { twMerge } from "tailwind-merge";

export default function Subtitle({ children, className }: { children: React.ReactNode; className?: string }) {
	return <p className={twMerge("text-gray-500 text-sm ", className)}>{children}</p>;
}
