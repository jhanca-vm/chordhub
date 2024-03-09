import { Lora, Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'
import 'tailwindcss/tailwind.css'
import Search from './_components/search'
import icon from './icon.png'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

const lora = Lora({
	style: 'italic',
	subsets: ['latin'],
	variable: '--font-lora'
})

export default function Layout({ children }) {
	return (
		<html
			lang="es"
			className={twJoin(montserrat.variable, lora.variable, 'min-w-[375px]')}
		>
			<body
				className={twJoin(
					'min-h-svh flex flex-col items-center px-4 bg-fixed bg-neutral-100',
					'text-sm text-neutral-900 *:w-full sm:px-10'
				)}
			>
				<header
					className={twJoin(
						'relative max-w-4xl flex items-end justify-between py-4 border-b',
						'border-neutral-300'
					)}
				>
					<Link href="/" className="flex items-end text-2xl">
						<Image className="w-11 -mx-1" src={icon} alt="" priority />
						<span className="flex flex-col leading-none">
							<em className="font-serif font-medium">ChordHub</em>
							<span className="text-xs text-neutral-600/80">
								Explora. Aprende. Toca!
							</span>
						</span>
					</Link>
					<Search />
				</header>
				{children}
				<footer
					className={
						'max-w-4xl py-3 text-center md:sticky md:bottom-0 md:text-left'
					}
				>
					© 2024 ChordHub
				</footer>
			</body>
		</html>
	)
}
