module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	settings: {
		react: {
			pragma: 'React',
			version: '18.2.0',
		},
	},
	plugins: ['prettier', 'react', 'react-hooks'],
	parser: '@babel/eslint-parser',
	env: {
		browser: true,
		es2021: true,
	},
	parserOptions: {
		sourceType: 'module',
		requireConfigFile: false,
		ecmaFeatures: {
			jsx: true,
		},
		babelOptions: {
			presets: ['@babel/preset-react'],
		},
	},
	rules: {
		'react/prop-types': 0,
		'no-console': ['warn'],
		'no-unsafe-optional-chaining': 'off',
		'react/jsx-filename-extension': 'off',
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': 'error',
		'no-unused-vars': 'warn',
		'no-console': 'off',
		'func-names': 'off',
		'no-process-exit': 'off',
		'object-shorthand': 'off',
		'class-methods-use-this': 'off',
		'max-len': ['warn', 180, 2, { ignoreComments: true }],
	},
};
