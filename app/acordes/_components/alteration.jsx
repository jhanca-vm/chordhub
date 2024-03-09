'use client'

import { useStore } from 'app/_lib/store'
import { useEffect } from 'react'
import { twJoin } from 'tailwind-merge'

export default function Alteration({ value }) {
	const alteration = useStore(state => state.alteration) ?? value
	const setAlteration = useStore(state => state.setAlteration)

	useEffect(() => {
		useStore.setState({ alteration: value })
	}, [value])

	return (
		<div
			className={twJoin(
				'overflow-hidden flex rounded font-music text-xl text-primary-900',
				'leading-normal'
			)}
		>
			<input
				className="peer/flat"
				type="radio"
				id="flat"
				value="1"
				hidden
				checked={alteration === 1}
				onChange={setAlteration}
			/>
			<label
				htmlFor="flat"
				className={twJoin(
					'px-3.5 bg-neutral-300 transition-colors cursor-pointer',
					'hover:shadow-inner peer-checked/flat:bg-primary-500',
					'peer-checked/flat:text-neutral-100'
				)}
			>
				♭
			</label>
			<input
				className="peer/sharp"
				type="radio"
				id="sharp"
				value="0"
				hidden
				checked={alteration === 0}
				onChange={setAlteration}
			/>
			<label
				htmlFor="sharp"
				className={twJoin(
					'pb-1 px-3.5 bg-neutral-300 transition-colors cursor-pointer',
					'hover:shadow-inner peer-checked/sharp:bg-primary-500',
					'peer-checked/sharp:text-neutral-100'
				)}
			>
				♯
			</label>
		</div>
	)
}
