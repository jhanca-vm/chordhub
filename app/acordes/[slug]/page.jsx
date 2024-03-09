import prisma from 'app/_lib/prisma'
import { Noto_Music } from 'next/font/google'
import { twJoin } from 'tailwind-merge'
import { uid } from 'uid'
import Alteration from '../_components/alteration'
import Details from '../_components/details'
import Key from '../_components/key'
import Spotify from '../_components/spotify'
import YouTube from '../_components/youtube'

const noto_music = Noto_Music({
	weight: '400',
	subsets: ['music'],
	variable: '--font-noto-music'
})

export async function generateStaticParams() {
	const params = await prisma.song.findMany({ select: { slug: true } })

	return params
}

export async function generateMetadata({ params: { slug } }) {
	const { name, artist } = await prisma.song.findUnique({
		where: { slug },
		select: { name: true, artist: true }
	})

	return {
		title: `${name} | ChordHub`,
		description: `Acordes de la canción ${name} de ${artist}.`
	}
}

export default async function Page({ params: { slug } }) {
	const song = await prisma.song.findUnique({ where: { slug } })
	const chords = JSON.parse(song.chords)

	return (
		<main className="max-w-4xl flex-grow md:grid md:grid-cols-2 lg:gap-x-12">
			<section
				className={
					'pt-4 pb-5 md:py-6 md:pr-12 md:sticky md:top-0 md:h-fit lg:pr-12'
				}
			>
				<h1 className="font-semibold text-xl">{song.name}</h1>
				<p className="font-medium">{song.artist}</p>
				{song.album && <p>{song.album}</p>}
				<nav className="mt-2 flex gap-x-1.5 pb-3 border-b border-neutral-400">
					<YouTube video={song.youtube} />
					<Spotify track={song.spotify} />
				</nav>
				<Key value={song.key} />
				<div className={'flex items-center gap-5 md:flex-col md:items-start'}>
					<Alteration value={song.alteration} />
					<p className="tracking-wide">
						<strong className="font-medium">BPM:</strong> {song.bpm}
					</p>
					<p className="tracking-wide">
						<strong className="font-medium">Compás: </strong>
						<span className="tracking-widest">{song.time}</span>
					</p>
				</div>
			</section>
			<section className={twJoin(noto_music.variable, 'pb-5 md:pb-0')}>
				{chords.map(({ title, bars }) => (
					<Details
						title={title}
						bars={bars}
						alteration={song.alteration}
						key={uid()}
					/>
				))}
			</section>
		</main>
	)
}
