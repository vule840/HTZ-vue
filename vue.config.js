module.exports = {
	// chainWebpack: (config) => {
 //    const svgRule = config.module.rule('svg');
 
 //    svgRule.uses.clear();
 
 //    svgRule
 //      .use('vue-svg-loader')
 //      .loader('vue-svg-loader');
 //  },

 chainWebpack: config => {
  config.module
    .rule('svg')
    .use('file-loader')
    .loader('svg-sprite-loader')
},
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
};