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
                }
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'system-ui', 'sans-serif']
            },
            boxShadow: {
                'soft-glow': '0 20px 60px rgba(90, 103, 242, 0.25)'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
