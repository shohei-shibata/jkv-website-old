module.exports = function(eleventyConfig) {

	eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });

  eleventyConfig.addCollection("projects", function (collectionAPI) {
    let collection =  collectionAPI.getFilteredByGlob("./projects/*.md");
    return collection;
  });
  
  eleventyConfig.addCollection("staff", function (collectionAPI) {
    let collection =  collectionAPI.getFilteredByGlob("./staff/*.md");
    return collection.sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addPassthroughCopy("assets");
};