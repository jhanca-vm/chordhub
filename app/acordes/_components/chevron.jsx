/**
 * @param {Object} props
 * @param {string} props.label
 * @param {() => void} props.handleClick
 * @param {import('react').ReactNode} props.children
 */
export default function Chevron({ label, handleClick, children }) {
	return (
		<button
			className={
				'opacity-80 transition-all hover:drop-shadow-sm hover:opacity-100'
			}
			type="button"
			onClick={handleClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-7 fill-none stroke-[1.25] stroke-current"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				role="img"
				aria-label={label}
			>
				{children}
				<path
					d={'M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z'}
				/>
			</svg>
		</button>
	)
}
