import React from "react";
import Head from "./Header/Container";
import Body from "./Body";
import { twMerge } from "tailwind-merge";

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
	const CardHead = React.Children.toArray(children).find(child => React.isValidElement(child) && child.type === Head) || null;
	const CardBody = React.Children.toArray(children).find(child => React.isValidElement(child) && child.type === Body) || null;
	return (
		<div className={twMerge("bg-[#1e1f22] rounded-lg p-5 h-full overflow-hidden text-ellipsis flex flex-col", className)}>
			{CardHead}
			{CardBody}
		</div>
	);
}
