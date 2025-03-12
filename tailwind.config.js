import typography from '@tailwindcss/typography';
import containerQuries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: 'var(--color-gray-50, #f9f9f9)',
					100: 'var(--color-gray-100, #ececec)',
					200: 'var(--color-gray-200, #e3e3e3)',
					300: 'var(--color-gray-300, #cdcdcd)',
					400: 'var(--color-gray-400, #b4b4b4)',
					500: 'var(--color-gray-500, #9b9b9b)',
					600: 'var(--color-gray-600, #676767)',
					700: 'var(--color-gray-700, #4e4e4e)',
					800: 'var(--color-gray-800, #ffffff40)',
					// Adapting dark shades to match VSCode theme
					850: 'var(--color-gray-850, #ffffff60)',
					900: 'var(--color-gray-900, #002451)',
					950: 'var(--color-gray-950, #001c40)',
					1000: 'var(--color-gray-1000, #001733)'
				},
				// Adding accent colors from VSCode theme
				accent: {
					blue: 'var(--color-accent-blue, #bbdaff)',
					lightBlue: 'var(--color-accent-lightBlue, #80baff)',
					highlight: 'var(--color-accent-highlight, #003f8e)',
					selection: 'var(--color-accent-selection, #ffffff60)'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			},
			padding: {
				'safe-bottom': 'env(safe-area-inset-bottom)'
			},
			backgroundColor: {
				editor: 'var(--color-editor-background, #002451)'
			}
		}
	},
	plugins: [typography, containerQuries]
};
