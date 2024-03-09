/**
 * @param {Object} props
 * @param {string} props.video
 */
export default function YouTube({ video }) {
	return (
		<a
			className={
				'opacity-80 transition-all hover:drop-shadow-sm hover:opacity-100'
			}
			href={`https://www.youtube.com/watch?v=${video}`}
			target="_blank"
			rel="noreferrer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-7 fill-none stroke-[1.5] stroke-[red]"
				viewBox="0 0 24 24"
				strokeLinejoin="round"
				role="img"
				aria-label="YouTube"
			>
				<path
					d={
						'M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z'
					}
				/>
				<path d="M10 9l5 3l-5 3z" />
			</svg>
		</a>
	)
}
