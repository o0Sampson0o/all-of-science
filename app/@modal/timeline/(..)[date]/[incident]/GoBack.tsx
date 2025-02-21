"use client";
import { useRouter } from "next/navigation";
export default function GoBack() {
	return (
		<button type='button' onClick={useRouter().back}>
			Go Back
		</button>
	);
}
