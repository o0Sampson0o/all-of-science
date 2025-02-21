export default function Body({ children }: { children: React.ReactNode }) {
	return <div className='text-base font-light leading-8 whitespace-nowrap text-wrap overflow-hidden text-ellipsis'>{children}</div>;
}
