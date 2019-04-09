module.exports = {
  publicPath: '/dentist-vuejs/',

  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/scss/variables.scss";
        @import "@/scss/mixins.scss";
        `
      }
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about'
      ],
      useRenderEvent: false,
      headless: false,
      onlyProduction: true
    }
  }
};
