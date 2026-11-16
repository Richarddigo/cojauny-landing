/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './emails/**/*.{html,txt}'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eef1ff',
                    100: '#dce3ff',
                    200: '#b8c4ff',
                    300: '#93a8ff',
                    400: '#7b94ff',
                    500: '#5B7BFF',
                    600: '#3A59D9',
                    700: '#2e46b0',
                    800: '#1f307f',
                    900: '#121f52'
                },
                // Studio dark theme tokens (aligned with cojauny-studio).
                // Available for opt-in dark sections via classes like `bg-studio-bg`, `text-studio-text`.
                studio: {
                    bg: '#0C1120',
                    surface: '#1C2336',
                    'surface-2': '#2A3550',
                    'surface-3': '#333F60',
                    accent: '#5B7BFF',
                    'accent-dim': '#3A59D9',
                    text: '#F1F5F9',
                    muted: '#94A3B8',
                    faint: '#8B9DBF',
                    border: 'rgba(255,255,255,0.08)'
                }
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'SF Pro Text',
                    'SF Pro Display',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    'var(--font-inter)',
                    'ui-sans-serif',
                    'system-ui',
                    'sans-serif'
                ]
            },
            boxShadow: {
                'soft-glow': '0 20px 60px rgba(91, 123, 255, 0.25)'
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
