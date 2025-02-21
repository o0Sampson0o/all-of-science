import Timeline from "@/app/_components/Timeline";
import timelineData from "@/app/(incident)";

export default function Home() {
	return (
		<div className='flex md:justify-center'>
			<Timeline {...timelineData} />
			<dialog className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'></dialog>
		</div>
	);
}
