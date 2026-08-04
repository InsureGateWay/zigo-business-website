/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'float-delayed': 'float-delayed 3.5s ease-in-out infinite',
                'float-delayed-2': 'float-delayed-2 4s ease-in-out infinite',
                'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
                'success-pop': 'success-pop 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'float-delayed': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'float-delayed-2': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
                'pulse-ring': {
                    '0%': { transform: 'scale(0.8)', opacity: '0.5' },
                    '100%': { transform: 'scale(1.3)', opacity: '0' },
                },
                'success-pop': {
                    '0%': { transform: 'scale(0.5)', opacity: '0' },
                    '70%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'fadeInUp': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}