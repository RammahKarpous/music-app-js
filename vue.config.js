module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    // Abstract
                    @import "@/assets/scss/abstract/_colours.scss";
                    @import "@/assets/scss/abstract/_sizes.scss";
                    
                    // Mixins
                    @import "@/assets/scss/mixins/_padding.scss";

                `
            }
        }
    }
}