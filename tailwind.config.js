/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                mono: ['GT Pressura Mono, monospace'],
            },
            colors: {
                'li-white': {
                    DEFAULT: '#E8E7D5',
                    100: '#393820',
                    200: '#72703f',
                    300: '#a8a562',
                    400: '#c8c69b',
                    500: '#e8e7d5',
                    600: '#ecebdd',
                    700: '#f1f0e5',
                    800: '#f6f5ee',
                    900: '#fafaf6',
                },
                'li-black': {
                    DEFAULT: '#312F32',
                    100: '#0a090a',
                    200: '#141314',
                    300: '#1d1c1e',
                    400: '#272628',
                    500: '#312f32',
                    600: '#5b575c',
                    700: '#847f87',
                    800: '#adaaaf',
                    900: '#d6d4d7',
                },
                'li-red': {
                    DEFAULT: '#EB2F2C',
                    100: '#330605',
                    200: '#670b0a',
                    300: '#9a110e',
                    400: '#cd1613',
                    500: '#eb2f2c',
                    600: '#ef5a57',
                    700: '#f38381',
                    800: '#f7acab',
                    900: '#fbd6d5',
                },
                'li-orange': {
                    DEFAULT: '#F5812A',
                    100: '#371903',
                    200: '#6d3205',
                    300: '#a44b08',
                    400: '#da640a',
                    500: '#f5812a',
                    600: '#f79a54',
                    700: '#f9b47e',
                    800: '#fbcda9',
                    900: '#fde6d4',
                },
                'li-gold': {
                    DEFAULT: '#FFD630',
                    100: '#3c3000',
                    200: '#786000',
                    300: '#b59000',
                    400: '#f1c100',
                    500: '#ffd630',
                    600: '#ffde58',
                    700: '#ffe682',
                    800: '#ffeeab',
                    900: '#fff7d5',
                },
            },
        },
    },
    plugins: [],
}
