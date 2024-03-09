import { search } from 'app/actions'
import { useRef, useState } from 'react'

export function useSearch() {
	const [result, setResult] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	/** @type {import('react').MutableRefObject<HTMLInputElement>} */
	const inputRef = useRef(null)
	/** @type {import('react').MutableRefObject<HTMLDialogElement>} */
	const dialogRef = useRef(null)

	async function find() {
		const value = inputRef.current.value

		if (value) {
			setIsLoading(true)
			dialogRef.current.show()
			setResult(await search(inputRef.current.value))
			setIsLoading(false)
		}
	}

	return { inputRef, dialogRef, result, isLoading, find }
}
