export default function Page({ children, ...rest }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	return <div {...rest}>{children}</div>;
}
