/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#E07A5F", // Terracotta
                secondary: "#264653", // Deep Sage / Charcoal
                accent: "#E9C46A", // Sandy Gold
                cream: "#F4F1DE", // Parchment
            },
            fontFamily: {
                header: ["'Oswald'", "sans-serif"],
                body: ["'Open Sans'", "sans-serif"],
            },
        },
    },
    plugins: [],
}
