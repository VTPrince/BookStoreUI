module.exports = {
    extends: [
        'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
    ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
		'linebreak-style': 'off',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				bracketSpacing: true,
				endOfLine: 'auto',
				indentStyle: 'space',
				printWidth: 100,
				semi: true,
				singleAttributePerLine: true,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'all',
				useTabs: true,
			},
		],
		'@typescript-eslint/no-explicit-any': 1,
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
				pathGroups: [
					{
						pattern: '@/**/**',
						group: 'parent',
						position: 'before',
					},
				],
				alphabetize: { order: 'asc' },
			},
		],
		'no-restricted-imports': [
			'error',
			{
				patterns: ['../'],
			},
		],
		'react-hooks/exhaustive-deps': 'off',
		'no-console': 1,
		'object-shorthand': 'error',
	},
	ignorePatterns: ['webpack.config.js', '.eslintrc.js', 'jest.config.js'],
};