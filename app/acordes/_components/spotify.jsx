/**
 * @param {Object} props
 * @param {string} props.track
 */
export default function Spotify({ track }) {
	return (
		<a
			className={
				'opacity-80 transition-all hover:drop-shadow-sm hover:opacity-100'
			}
			href={`https://open.spotify.com/intl-es/track/${track}`}
			target="_blank"
			rel="noreferrer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-7 fill-none stroke-[1.5] stroke-[#1ed760]"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				role="img"
				aria-label="Spotify"
			>
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
				<path d="M9 15c1.5 -1 4 -1 5 .5" />
				<path d="M7 9c2 -1 6 -2 10 .5" />
			</svg>
		</a>
	)
}
