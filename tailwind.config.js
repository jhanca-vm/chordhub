import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./app/**/*.jsx'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			neutral: {
				100: '#f9fbff',
				200: '#f2f5ff',
				300: '#e9e9e9',
				400: '#bebebe',
				500: '#7d7d7d',
				600: '#272727',
				700: '#211c1c',
				800: '#1c1315',
				900: '#160c0f'
			},
			primary: {
				100: '#d2f8e9',
				200: '#a8f1da',
				300: '#74d6c0',
				400: '#4baea0',
				500: '#1d7874',
				600: '#156367',
				700: '#0e4c56',
				800: '#093845',
				900: '#052939'
			}
		},
		fontFamily: {
			sans: 'var(--font-montserrat)',
			serif: 'var(--font-lora)',
			music: 'var(--font-noto-music)'
		},
		extend: {
			maxWidth: {
				'4xl': '60rem'
			}
		}
	},
	plugins: [
		plugin(({ addBase, addComponents, addUtilities, theme }) => {
			addBase({
				body: {
					backgroundImage: `radial-gradient(60% 120% at 50% 50%, transparent, ${theme(
						'colors.neutral.200'
					)})`
				},
				'input[type="search"]::-webkit-search-cancel-button': {
					display: 'none'
				}
			})
			addComponents({
				'.bg-pattern': {
					backgroundImage: `radial-gradient(${theme(
						'colors.primary.200'
					)} 1px, transparent 1px)`,
					backgroundSize: '16px 16px'
				}
			})
			addUtilities({
				'.mask-ellipse': {
					'mask-image':
						'radial-gradient(ellipse 50% 50% at 50% 50%, #000 80%, transparent)'
				}
			})
		})
	]
}
