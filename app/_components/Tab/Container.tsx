"use client";

import React, { useState, useMemo } from "react";
import Page from "./Page";
import { twMerge } from "tailwind-merge";

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
	const tabs: React.ReactElement<typeof Page>[] = useMemo(() => React.Children.toArray(children) as React.ReactElement<typeof Page>[], [children]);
	const [activeTab, setActiveTab] = useState(0);

	const increaseTab = () => setActiveTab(x => (x < tabs.length - 1 ? x + 1 : x));
	const decreaseTab = () => setActiveTab(x => (x > 0 ? x - 1 : x));

	return (
		<div className={twMerge("flex flex-col", className)}>
			{tabs[activeTab]}
			{tabs.length > 1 && (
				<div className='self-center flex gap-1'>
					<button type='button' onClick={decreaseTab}>
						{"<"}
					</button>
					{activeTab + 1}
					<button type='button' onClick={increaseTab}>
						{">"}
					</button>
				</div>
			)}
		</div>
	);
}
