import fs from "fs";
import path from "path";
import { TimelineProps } from "../_components/Timeline/types";

const timelineData: TimelineProps = {
	timeStamps: []
};

const pathComponentMap = new Map<string, React.FC>();

const __dirname = path.resolve(path.dirname("./app/_incident/index.ts"));

// Read all sub directory under the directory, folder names are the dates and if start with "_" then it is BCE
// exclude all files
const dates = fs
	.readdirSync(__dirname)
	.filter(x => fs.lstatSync(path.join(__dirname, x)).isDirectory())
	.sort((a, b) => {
		if (a[0] === "_" && b[0] !== "_") return -1;
		if (a[0] !== "_" && b[0] === "_") return 1;
		return a.localeCompare(b);
	});

// read all files in the dates directory
for await (const date of dates) {
	const decodedDate = date[0] == "_" ? `BCE ${date.slice(1)}` : date;
	const incidents = fs.readdirSync(path.join(__dirname, date));
	timelineData.timeStamps.push({ date: decodedDate, incidents });

	for await (const incident of incidents) {
		const Summary = (await import(`./${date}/${incident}/summary.tsx`)).default;
		pathComponentMap.set(path.join(decodedDate, incident), Summary);
	}
}

export default timelineData;
export { pathComponentMap };
