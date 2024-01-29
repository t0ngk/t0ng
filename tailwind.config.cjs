/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'gull-gray': {
					50: '#f9fafb',
					100: '#f1f5f6',
					200: '#e6ecee',
					300: '#d1dde1',
					400: '#b4c6cc',
					500: '#94adb6',
					600: '#7c97a1',
					700: '#66808a',
					800: '#566a73',
					900: '#46565d',
					950: '#2c393f'
				}
			},
			fontFamily: {
				'chakra-petch' : ['Chakra Petch', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
