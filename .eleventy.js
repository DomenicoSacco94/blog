module.exports = function(eleventyConfig) {
    // Copy `css` directory to the output
    eleventyConfig.addPassthroughCopy("css");

    return {
        dir: {
            input: ".",
            output: "_site"
        },
        pathPrefix: "/blog/"
    };
};