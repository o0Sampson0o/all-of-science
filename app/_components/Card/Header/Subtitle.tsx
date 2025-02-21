export default function Subtitle({ children, className }: { children: React.ReactNode; className?: string }) {
	return <p className={className}>{children}</p>;
}
