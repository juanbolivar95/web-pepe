module.exports = {
	globDirectory: 'plugin/',
	globPatterns: [
		'**/*.{css,png,jpg,gif,js}'
	],
	swDest: 'plugin/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};