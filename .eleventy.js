module.exports = function(eleventyConfig) {

	eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });

  eleventyConfig.addPassthroughCopy("assets");
};