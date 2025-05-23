module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/favicon.png");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("posts");
    eleventyConfig.addPassthroughCopy("pictures");
    eleventyConfig.addPassthroughCopy("projects");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        pathPrefix: "/blog/"
    };
};