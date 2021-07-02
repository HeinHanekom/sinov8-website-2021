const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
/*    mode: 'jit',*/
    purge: [
        '.App.vue',
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/views/*.{vue}',
        './src/components/*.{vue}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
