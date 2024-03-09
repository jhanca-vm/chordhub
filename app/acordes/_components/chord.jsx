'use client'

import { useStore } from 'app/_lib/store'

/**
 * @param {Object} props
 * @param {string} props.value
 * @param {0|1} [props.alteration]
 * @param {0|1} [props.defaultAlteration]
 */
export default function Chord({ value, alteration, defaultAlteration }) {
	const notes = useStore(state => state.notes)
	const index = alteration ?? useStore(state => state.alteration)

	let [chord, bass] = value.split('-')
	let [note, symbol] = chord.split('+')

	note = notes[note]
	bass = notes[bass]

	if (typeof note === 'object') note = note[index ?? defaultAlteration]
	if (typeof bass === 'object') bass = bass[index ?? defaultAlteration]

	return (
		<>
			{note}
			{symbol && <small className="font-normal">{symbol}</small>}
			{bass && `/${bass}`}
		</>
	)
}
