import { twMerge } from "tailwind-merge";

export default function Body({ children, className, ...rest }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	return (
		<div {...rest} className={twMerge("text-base font-light leading-8 whitespace-nowrap text-wrap overflow-hidden text-ellipsis", className)}>
			{children}
		</div>
	);
}
