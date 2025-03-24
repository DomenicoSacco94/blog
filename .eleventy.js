module.exports = function(eleventyConfig) {
    // Copy `css` directory to the output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("contacts");
    eleventyConfig.addPassthroughCopy("cv");
    eleventyConfig.addPassthroughCopy("posts");
    eleventyConfig.addPassthroughCopy("projects");

    return {
        dir: {
            input: ".",
            output: "_site"
        },
        pathPrefix: "/blog/"
    };
};