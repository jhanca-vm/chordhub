import Link from 'next/link'
import { twJoin } from 'tailwind-merge'
import prisma from './_lib/prisma'
import Chord from './acordes/_components/chord'

/** @type {import('next').Metadata} */
export const metadata = {
	title: 'ChordHub: Explora. Aprende. Toca!',
	description:
		'¡Encuentra acordes con figuras rítmicas de canciones cristianas! Nos ' +
		'enfocamos en brindarte la información que necesitas para tocar con ' +
		'presición y sin complicaciones.'
}

export default async function Page() {
	const songs = await prisma.song.findMany({
		select: {
			slug: true,
			name: true,
			artist: true,
			album: true,
			key: true,
			alteration: true
		},
		orderBy: { createdAt: 'asc' }
	})

	return (
		<main className="max-w-4xl flex-grow">
			<section className="relative py-10 md:py-12">
				<div className="absolute inset-0 -z-10 bg-pattern mask-ellipse" />
				<p
					className={twJoin(
						'max-w-2xl mx-auto text-pretty text-center text-lg ',
						'text-neutral-600 [&_strong]:font-semibold ',
						'[&_strong]:text-primary-700 md:text-xl lg:text-2xl'
					)}
				>
					¡Encuentra <strong>acordes</strong> con
					<strong> figuras rítmicas</strong> de canciones cristianas! Nos
					enfocamos en brindarte la información que necesitas para
					<strong> tocar con presición y sin complicaciones.</strong>
				</p>
			</section>
			<section className="my-6">
				<h2 className="font-bold text-lg text-primary-900 tracking-wide">
					Novedades
				</h2>
				<table className="w-full mt-2">
					<tbody className="font-medium">
						{songs.map(({ slug, name, artist, album, key, alteration }) => (
							<tr className="border-t border-primary-400 *:py-4" key={slug}>
								<th className="pr-4 font-semibold text-left text-primary-500">
									<Link
										href={`/acordes/${slug}`}
										className="underline-offset-2 hover:underline"
									>
										{name}
									</Link>
								</th>
								<td className="pr-4">{artist}</td>
								<td className="hidden pr-4 sm:table-cell">{album ?? '-'}</td>
								<td className="font-serif font-medium text-primary-900">
									<span
										className={
											'py-0.5 px-2 bg-primary-100 rounded-full shadow-inner'
										}
									>
										<Chord value={key} alteration={alteration} />
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</main>
	)
}
