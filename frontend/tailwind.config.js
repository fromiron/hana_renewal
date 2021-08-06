module.exports = {
    important: true,
    purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                lightgray: '#f8f7f9',
                gray: '#8a8a8a',
                point: '#6540b1',
                black: '#12022f',
                primary: {
                    light: '#f0a0b1',
                    DEFAULT:'#f06292',
                    dark: '#424242',
                },
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
        },
    },
    plugins: [require("kutty")],
    future: {
        purgeLayersByDefault: true,
    },
}

