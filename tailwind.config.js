/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-gray-100': '#f2f2f2',
				'brand-gray-200': '#d9d9d9',
				'brand-gray-300': '#7f7f7f',
				'brand-gray-400': '#333333',
				'brand-gray-500': '#262626',
				'brand-gray-600': '#1a1a1a',
				'brand-gray-700': '#0d0d0d',
				'brand-purple': '#8284fa',
				'brand-purple-dark': '#5e60ce',
				'brand-blue': '#4ea8de',
				'brand-blue-dark': '#1e6f9f',
				'brand-danger': '#e25858'
			}
		}
	},
	plugins: []
};
