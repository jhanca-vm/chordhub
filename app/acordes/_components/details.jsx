'use client'

import { twJoin } from 'tailwind-merge'
import { uid } from 'uid'
import Chord from './chord'

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {[string, string][][]} props.bars
 * @param {0|1} [props.alteration]
 */
export default function Details({ title, bars, alteration }) {
	return (
		<details className="my-6 rounded-lg font-serif text-center" open>
			<summary
				className={twJoin(
					'pb-2 border-b border-neutral-500 font-semibold text-lg',
					'text-primary-600'
				)}
			>
				{title}
			</summary>
			<ol className="py-0.5 text-xl text-primary-900">
				{bars.map(bar => (
					<li
						className={twJoin(
							'grid grid-flow-col gap-x-9 justify-center border-b',
							'border-neutral-500'
						)}
						key={uid()}
					>
						{bar.map(([rhythmic, chord]) => (
							<div key={uid()}>
								<span className="block font-music text-2xl leading-none">
									{rhythmic}
								</span>
								<Chord value={chord} defaultAlteration={alteration} />
							</div>
						))}
					</li>
				))}
			</ol>
		</details>
	)
}
