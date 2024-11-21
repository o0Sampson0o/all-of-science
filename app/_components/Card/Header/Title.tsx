import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
	return <h2 className='text-2xl font-medium leading-8 mb-3'>{children}</h2>;
}
