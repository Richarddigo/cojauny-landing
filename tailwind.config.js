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
                'soft-glow': '0 20px 60px rgba(90, 103, 242, 0.25)'
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
