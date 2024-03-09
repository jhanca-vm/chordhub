import { renderHook } from '@testing-library/react'
import { expect, test } from 'vitest'
import { useStore } from './store'

test('transposes notes', () => {
	const notes = renderHook(() => useStore(state => state.notes))
	const transpose = renderHook(() => useStore(state => state.transpose))

	expect(notes.result.current[0]).toBe('C')

	transpose.result.current(-1)
	notes.rerender()
	expect(notes.result.current[0]).toBe('B')

	transpose.result.current(5)
	notes.rerender()
	expect(notes.result.current[0]).toBe('E')
})
