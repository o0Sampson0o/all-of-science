import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default function Container({ children }: { children: React.ReactNode }) {
	const title = React.Children.toArray(children).find((child) => React.isValidElement(child) && child.type === Title);
	const subtitle = React.Children.toArray(children).find((child) => React.isValidElement(child) && child.type === Subtitle);
	return (
		<div>
			{title}
			{subtitle}
		</div>
	);
}