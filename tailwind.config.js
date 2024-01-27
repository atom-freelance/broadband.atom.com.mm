/** @type {import('tailwindcss').Config['theme']} */
const themeExtend = {
	container: {
		center: true,
		padding: '2rem',
	},
	fontSize: {
		'title-hero': ['72px', '88px'],
		'title-screen': ['30px', '34px'],
		'title-section': ['26px', '32px'],
		'title-subsection': ['22px', '28px'],
		'title-body': ['18px', '24px'],
		'title-group': ['14px', '20px'],

		'body-large': ['16px', '24px'],
		'body': ['14px', '22px'],
	},
	colors: {
		'primary': {
			DEFAULT: '#2449FB',
			light: '#00C8FF',
		},
		'flag-gray': '#F0F0F0',
		'flag-green': '#005B13',
		'content': {
			'primary': '#0E0F0C',
			'secondary': '#454745',
			'tertiary': '#6A6C6A',
			'link': '#163300',
			'link-hover': '#0D1F00',
			'link-active': '#0E0F0C',
		},
		'interactive': {
			'primary': '#163300',
			'primary-hover': '#0D1F00',
			'primary-active': '#0E0F0C',
			'secondary': '#868685',
			'secondary-hover': '#6C6C6B',
			'secondary-active': '#525251',
			'accent': '#2449FB',
			'accent-hover': '#1C38BC',
			'accent-active': '#0C27A7',
			'control': '#163300',
			'control-hover': '#0D1F00',
			'control-active': '#0E0F0C',
			'negative': '#E74848',
			'negative-hover': '#D03238',
			'negative-active': '#BF1E2C',
		},
		'sentiment': {
			'negative': '#A8200D',
			'negative-hover': '#8E1B0B',
			'negative-active': '#761709',
			'positive': '#2F5711',
			'warning': '#EDC843',
		},
		'categories': {
			'bills': '#EDB37E',
			'cash': '#AFCCA1',
			'eating-out': '#92B0EA',
			'entertainment': '#9DDDD5',
			'expenses': '#9ACED9',
			'family': '#F2A9CE',
			'general': '#CDD0CD',
			'groceries': '#FC8D94',
			'housing': '#F09EBC',
			'investments': '#F2C374',
			'personal-care': '#8DA1C7',
			'salary': '#79A6FC',
			'savings': '#C293C9',
			'shopping': '#7B8ABE',
			'transport': '#FFAA99',
			'trips': '#C8AD98',
		},
		'benefit-card': {
			'wifi': '#FFD8EF',
			'pone-call': '#78C9FF',
			'sim-card': '#A0E1E1',
		},
	},
}

/** @type {import('daisyui').CustomTheme} */
const atom_theme = {
	'primary': themeExtend.colors.primary.DEFAULT,
	'primary-content': '#ffffff',
	'secondary': '#f6d860',
	'accent': '#37cdbe',
	'neutral': '#3d4451',
	'base-100': '#ffffff',

	'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
	'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
	'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
	'--animation-btn': '0.25s', // duration of animation when you click on button
	'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
	'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
	'--border-btn': '1px', // border width of buttons
	'--tab-border': '1px', // border width of tabs
	'--tab-radius': '0.5rem', // border radius of tabs
}

/** @type {import('daisyui').Config} */
const daisyConfig = {
	themes: [{ atom_theme }],
}

/** @type {import('tailwindcss').Config} */
export default {
	plugins: [require('daisyui')],
	theme: { extend: themeExtend },
	daisyui: daisyConfig,
	safelist: ['container', 'text-content-primary', 'scroll-smooth'],
}
