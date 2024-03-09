'use client'

import { useSearch } from 'app/_lib/hooks'
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'
import Skeleton from './skeleton'

export default function Search() {
	const { inputRef, dialogRef, result, isLoading, find } = useSearch()

	return (
		<>
			<label
				className={twJoin(
					'overflow-hidden w-32 flex items-center bg-neutral-300/60 rounded-lg',
					'shadow-inner text-primary-600 outline-1 outline-primary-500',
					'focus-within:outline sm:w-60'
				)}
			>
				<input
					ref={inputRef}
					className={twJoin(
						'w-full mx-3 bg-transparent font-medium caret-current outline-none',
						'placeholder-neutral-500'
					)}
					type="search"
					placeholder="Buscar canción..."
					onKeyUp={({ key }) => {
						if (key === 'Enter') find()
					}}
				/>
				<button
					className="p-2 transition-colors hover:bg-neutral-400/30"
					type="button"
					onClick={find}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 fill-none stroke-[1.5] stroke-current"
						viewBox="0 0 24 24"
						strokeLinecap="round"
						role="img"
						aria-label="Search"
					>
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M21 21l-6 -6" />
					</svg>
				</button>
			</label>
			<dialog
				ref={dialogRef}
				className={twJoin(
					'top-full z-10 mr-0 w-80 gap-y-4 bg-neutral-100 p-4 shadow-2xl',
					'text-neutral-600 outline-none open:grid'
				)}
				onBlur={() => dialogRef.current.close()}
			>
				{isLoading ? (
					<>
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</>
				) : result.length ? (
					<>
						{result.map(({ slug, name, artist }) => (
							<Link
								className="group w-fit leading-none"
								href={`/acordes/${slug}`}
								key={`result-${slug}`}
								onClick={() => {
									dialogRef.current.close()
									inputRef.current.value = ''
								}}
							>
								<strong
									className={
										'font-medium underline-offset-2 group-hover:underline'
									}
								>
									{name}
								</strong>
								<small className="block mt-1.5">{artist}</small>
							</Link>
						))}
					</>
				) : (
					<p>No se encontraron resultados. 😕</p>
				)}
			</dialog>
		</>
	)
}
