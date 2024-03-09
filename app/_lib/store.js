import { create } from 'zustand'

export const useStore = create(set => ({
	notes: [
		'C',
		['C♯', 'D♭'],
		'D',
		['D♯', 'E♭'],
		'E',
		'F',
		['F♯', 'G♭'],
		'G',
		['G♯', 'A♭'],
		'A',
		['A♯', 'B♭'],
		'B'
	],
	/** @type {import('react').ChangeEventHandler<HTMLInputElement} */
	setAlteration: ({ target: { value } }) => set({ alteration: Number(value) }),
	/** @param {number} interval half steps */
	transpose(interval) {
		set(({ notes }) => {
			const first = [...notes]
			const count = interval < 0 ? interval + 12 : interval
			const deleted = first.splice(0, count)

			return { notes: first.concat(deleted) }
		})
	}
}))
