/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx,scss}",
	],
	theme: {
		extend: {
			boxShadow: {
				'custom-pink': '0px 12px 24px rgba(224, 84, 151, 0.3)',
				'btn-pink': '0px 17px 22px rgba(255, 237, 246, 1)',
			},
		},
	},
	plugins: [],
}

