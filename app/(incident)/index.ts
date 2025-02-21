import fs from "fs";
import path from "path";
import { TimelineProps } from "../_components/Timeline/types";

const timelineData: TimelineProps = {
	timeStamps: []
};

const incidentSummaryMap = new Map<string, React.FC>();
const incidentPageMap = new Map<string, React.FC>();
const incidentNameMap = new Map<string, string>();

const __dirname = path.resolve(path.dirname("./app/(incident)/index.ts"));

// Read all sub directory under the directory
// include only directories
// sort directories by name as timeline is in chronological order, "-" indicates BCE
const dateDirs = fs
	.readdirSync(__dirname)
	.filter(x => fs.lstatSync(path.join(__dirname, x)).isDirectory())
	.sort((a, b) => {
		return +a - +b;
	});

// read all files in the dateDirs directory
for (const date of dateDirs) {
	try {
		const incidents = fs.readdirSync(path.join(__dirname, date));

		timelineData.timeStamps.push({ date, incidents: [] });
		for (const incident of incidents) {
			const index = await import(`./${date}/${incident}`);
			const key = path.normalize(path.join(date, incident));
			incidentSummaryMap.set(key, index.Summary);
			incidentPageMap.set(key, index.default);
			incidentNameMap.set(key, index.incidentName);
			timelineData.timeStamps[timelineData.timeStamps.length - 1].incidents?.push(incident);
		}
	} catch (e) {
		console.error(`Failed to load incident data for ${date}`, e);
	}
}

export default timelineData;
export { incidentSummaryMap, incidentPageMap, incidentNameMap };
