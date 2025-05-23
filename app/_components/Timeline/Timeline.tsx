import { TimelineProps } from "./types";
import TimeStamp from "./TimeStamp";
import * as Card from "../Card";
import * as Tab from "../Tab";
import path from "path";
import { incidentSummaryMap, incidentNameMap } from "@/app/(incident)";
import Link from "next/link";

export default function Timeline({ timeStamps }: TimelineProps) {
	return (
		<div className='relative'>
			{timeStamps.map(x => {
				return (
					<div key={x.date} className='group relative flex gap-6 h-64'>
						<TimeStamp className='size-5' />
						<Tab.Container className='absolute left-10 top-0 md:group-even:-left-5 md:group-even:-translate-x-full w-[30rem] h-[16rem]'>
							{(x.incidents ?? []).map(incident => {
								const key = path.join(x.date, incident);
								const Summary = incidentSummaryMap.get(key);
								const date = +x.date < 0 ? `${Math.abs(+x.date)} BCE` : x.date;
								if (!Summary) return;

								return (
									<Tab.Page className='h-full flex flex-col' key={incident}>
										<Card.Header.Subtitle className='md:group-even:self-end'>{date}</Card.Header.Subtitle>
										<Link href={`/${x.date}/${incident}`} className='size-full block absolute'></Link>
										<Card.Container>
											<Card.Header.Container>
												<Card.Header.Title>{incidentNameMap.get(key)}</Card.Header.Title>
											</Card.Header.Container>
											<Card.Body>
												<Summary />
											</Card.Body>
										</Card.Container>
									</Tab.Page>
								);
							})}
						</Tab.Container>
					</div>
				);
			})}
			<div className='absolute top-0 h-full w-5 flex justify-center'>
				<div className='border-l-2 border-gray-400 h-full' />
			</div>
		</div>
	);
}
