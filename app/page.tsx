import Link from "next/link";

export default function Home() {
	return (
		<div className='flex md:justify-center'>
			Goto <Link href='/timeline'>Timeline</Link>
		</div>
	);
}
