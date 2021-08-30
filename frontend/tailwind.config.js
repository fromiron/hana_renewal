module.exports = {
    important: true,
    purge: {
        content: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
        options: {
            safelist: [
                /data-theme$/,
            ]
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
            inset: ['checked'],
            zIndex: ['hover', 'active'],
        },
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography'),
    ],
    daisyui: {
        themes: [{
            'rabbit': {
                'white': '#ffffff',
                'lightgray': '#f8f7f9',
                'gray': '#8a8a8a',
                'point': '#6540b1',
                'black': '#12022f',
                'primary': '#f06292',
                'primary-light': '#f0a0b1',
                'primary-dark': '#424242',
            },
        },
            'dark'
        ],
        logs:true
    },
    future: {
        purgeLayersByDefault: true,
    },
}

