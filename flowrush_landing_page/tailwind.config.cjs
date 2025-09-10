/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx,js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1e40af',
					foreground: '#ffffff',
				},
				background: '#0b1220',
			},
		},
	},
	plugins: [],
};


