import Timeline from "./_components/Timeline";
import timelineData from "@/app/_incident";
import "katex/dist/katex.min.css";

export default function Home() {
	return (
		<div className='flex md:justify-center'>
			<Timeline {...timelineData} />
		</div>
	);
}

