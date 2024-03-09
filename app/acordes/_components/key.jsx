'use client'

import { useStore } from 'app/_lib/store'
import Chevron from './chevron'
import Chord from './chord'

export default function Key({ value }) {
	const transpose = useStore(state => state.transpose)

	return (
		<div className="mt-4 mb-5 flex gap-x-1 text-primary-900">
			<Chevron label="Bajar un tono" handleClick={() => transpose(-2)}>
				<path d="M15 15l-3 -3l3 -3" />
				<path d="M11 15l-3 -3l3 -3" />
			</Chevron>
			<Chevron label="Bajar un semitono" handleClick={() => transpose(-1)}>
				<path d="M13 15l-3 -3l3 -3" />
			</Chevron>
			<span className="px-2 font-serif font-medium text-xl tracking-wide">
				<Chord value={value} />
			</span>
			<Chevron label="Subir un semitono" handleClick={() => transpose(1)}>
				<path d="M11 9l3 3l-3 3" />
			</Chevron>
			<Chevron label="Subir un tono" handleClick={() => transpose(2)}>
				<path d="M9 9l3 3l-3 3" />
				<path d="M13 9l3 3l-3 3" />
			</Chevron>
		</div>
	)
}
