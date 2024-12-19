/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@astrojs/**/*.js'],
	theme: {
    	extend: {
				spacing: {
					'100': '25rem',
					'120': '30rem',
					'144': '36rem',
				},
				keyframes: {
					fadeInScale: {
						'0%': { opacity: 0, transform: 'scale(0.9)' },
						'100%': { opacity: 1, transform: 'scale(1)' },
					},
				},
				animation: {
					fadeInScale: 'fadeInScale 0.6s ease-out',
				},
				backgroundImage: {
					'grain': "url('data:image/svg+xml,%253Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'200'%20height%3D'200'%253E%253Cfilter%20id%3D'noise'%253E%253CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'0.65'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%253E%253C%2Ffilter%253E%253Crect%20width%3D'100%2525'%20height%3D'100%2525'%20filter%3D'url(%2523noise)'%2F%253E%253C%2Fsvg%253E')"
				},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
				screens: {
					'max-content': '1200px',
				}
    	}
    },
	plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate"), require('@tailwindcss/line-clamp'),
		function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: '1px 1px 2px black, 0 0 1em black',
        },
        '.text-outline-white': {
          textShadow: '1px 1px 2px white, 0 0 1em white',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
	], 
}
