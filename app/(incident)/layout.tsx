import React from "react";
import path from "path";
import { incidentNameMap } from ".";
import { headers } from "next/headers";

export default async function Layout({ children }: { children: React.ReactNode }) {
	const heads = await headers();
	const pathname = new URL(heads.get("x-full-path")!).pathname;
	console.log(pathname);
	const key = pathname?.split("/").slice(1);
	const incidentName = incidentNameMap.get(path.join(key[0], key[1]));
	return (
		<>
			<h1 className='font-medium leading-8 text-2xl mb-3'>{incidentName}</h1>
			<p className='text-gray-500 text-sm'>{+key[0] < 0 ? `${Math.abs(+key[0])} BCE` : key[0]}</p>
			{children}
		</>
	);
}
