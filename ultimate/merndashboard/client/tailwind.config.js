/** @type {import('tailwindcss').Config} */
/* eslint-disable */
const tailwindScrollbar = require("tailwind-scrollbar");
const flowbitePlugin = require("flowbite/plugin");

export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite için doğru yolu kullanın
	],
	theme: {
		extend: {},
	},
	plugins: [tailwindScrollbar, flowbitePlugin],
};
