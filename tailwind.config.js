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
                    300: '#d6c28d',
                    400: '#7b94ff',
                    500: '#b8c78f',
                    600: '#315b48',
                    700: '#244837',
                    800: '#1f307f',
                    900: '#121f52'
                },
                // Cojauny forest palette; Studio-prefixed utilities are legacy aliases.
                // Available for opt-in dark sections via classes like `bg-studio-bg`, `text-studio-text`.
                studio: {
                    bg: '#172e26',
                    surface: '#233f34',
                    'surface-2': '#365347',
                    'surface-3': '#466456',
                    accent: '#b8c78f',
                    'accent-dim': '#315b48',
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
