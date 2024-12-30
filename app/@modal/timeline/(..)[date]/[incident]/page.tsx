import { incidentPageMap } from "@/app/(incident)";
import path from "path";
import GoBack from "./GoBack";

export default async function Page({ params }: { params: Promise<{ date: string; incident: string }> }) {
	const { date, incident } = await params;
	const Page = incidentPageMap.get(path.join(date, incident));
	if (!Page) return;
	return (
		<div className='fixed size-full top-0 left-0 bg-black/80 flex flex-col items-center'>
			<div className='bg-[#101010] p-5 max-w-[80%] max-h-[50%] overflow-auto font-light leading-8 mt-20'>
				<Page />
			</div>
			<GoBack />
		</div>
	);
}
