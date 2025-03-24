module.exports = function(eleventyConfig) {
    // Copy `css` directory to the output
    eleventyConfig.addPassthroughCopy("css");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        pathPrefix: "/blog/"
    };
};