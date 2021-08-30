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
            'dwarf': {                          /* Light mode */
                'primary': '#f0a0b1',           /* Primary color */
                'primary-focus': '#f06292',     /* Primary color - focused */
                'primary-content': '#ffffff',   /* Foreground content color to use on primary color */
                'accent': '#a991f7',            /* Accent color */
                'accent-focus': '#8462f4',      /* Accent color - focused */
                'accent-content': '#ffffff',    /* Foreground content color to use on accent color */
                'base-100': '#ffffff',          /* Base color of page, used for blank backgrounds */
                'base-200': '#e5e5e5',          /* Base color, a little darker */
                'base-300': '#b8b9ba',          /* Base color, even more darker */
                'base-content': '#ffffff',      /* Foreground content color to use on base color */
                'info': '#2094f3',              /* Info */
                'success': '#009485',           /* Success */
                'warning': '#ff9900',           /* Warning */
                'error': '#ff5724',             /* Error */
            },
            'lop': {                            /* Dark mode */
                'primary': '#f0a0b1',           /* Primary color */
                'primary-focus': '#f06292',     /* Primary color - focused */
                'primary-content': '#414040',   /* Foreground content color to use on primary color */
                'accent': '#a991f7',            /* Accent color */
                'accent-focus': '#8462f4',      /* Accent color - focused */
                'accent-content': '#565656',    /* Foreground content color to use on accent color */
                'base-100': '#565656',          /* Base color of page, used for blank backgrounds */
                'base-200': '#6b6969',          /* Base color, a little darker */
                'base-300': '#ffffff',          /* Base color, even more darker */
                'base-content': '#1f2937',      /* Foreground content color to use on base color */
                'info': '#2094f3',              /* Info */
                'success': '#009485',           /* Success */
                'warning': '#ff9900',           /* Warning */
                'error': '#ff5724',             /* Error */
            },
        }
        ],
        logs: true
    },
    future: {
        purgeLayersByDefault: true,
    },
}

