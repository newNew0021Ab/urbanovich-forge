import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Индустриальная палитра
				concrete: 'hsl(var(--concrete))',
				steel: 'hsl(var(--steel))',
				copper: 'hsl(var(--copper))',
				iron: 'hsl(var(--iron))',
				ash: 'hsl(var(--ash))',
				dust: 'hsl(var(--dust))',
				
				// Свечения
				'glow-orange': 'hsl(var(--glow-orange))',
				'glow-blue': 'hsl(var(--glow-blue))',
				
				// Поверхности
				'surface-rough': 'hsl(var(--surface-rough))',
				'surface-polished': 'hsl(var(--surface-polished))',
				'surface-oxidized': 'hsl(var(--surface-oxidized))',
				
				// Семантические
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'steel': 'var(--shadow-steel)',
				'copper': 'var(--shadow-copper)',
				'forge': 'var(--shadow-forge)',
			},
			backgroundImage: {
				'gradient-metal': 'var(--gradient-metal)',
				'gradient-copper': 'var(--gradient-copper)',
				'gradient-surface': 'var(--gradient-surface)',
			},
			transitionTimingFunction: {
				'swift': 'var(--transition-swift)',
				'smooth': 'var(--transition-smooth)',
				'precise': 'var(--transition-precise)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				forge: {
					'0%, 100%': { opacity: '0.8', transform: 'translateY(0)' },
					'50%': { opacity: '1', transform: 'translateY(-2px)' }
				},
				spark: {
					'0%': { opacity: '0', transform: 'translateY(10px) scale(0.8)' },
					'50%': { opacity: '1', transform: 'translateY(0) scale(1)' },
					'100%': { opacity: '0', transform: 'translateY(-10px) scale(0.8)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'forge': 'forge 3s ease-in-out infinite',
				'spark': 'spark 2s linear infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
