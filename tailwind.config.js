/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './emails/**/*.{html,txt}'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f5f7ff',
                    100: '#e6ecff',
                    200: '#c4ccff',
                    300: '#9da8ff',
                    400: '#7b88ff',
                    500: '#5a67f2',
                    600: '#434dd7',
                    700: '#2e36ad',
                    800: '#1d2380',
                    900: '#121754'
                }
            },
            fontFamily: {
                // SF Pro Display and Text (iPhone system font) with optimal fallbacks
                sans: [
                    'var(--font-inter)',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'SF Pro Display',
                    'SF Pro Text',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    ...defaultTheme.fontFamily.sans
                ]
            },
            boxShadow: {
                'soft-glow': '0 20px 60px rgba(90, 103, 242, 0.25)'
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
