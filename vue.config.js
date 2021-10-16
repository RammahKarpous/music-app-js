module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/abstract/_colours.scss";
                    @import "@/assets/scss/abstract/_sizes.scss";
                `
            }
        }
    }
}