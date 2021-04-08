module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");

	return {
		passthroughCopy: true,
		markdownTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],

		dir: {
			input: "src",
			output: "_site",
			includes: "includes",
		},
	};
};
