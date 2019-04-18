module.exports = {
  // publicPath: '/dentist-vuejs/',

  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/scss/mixins.scss";
        @import "@/scss/variables.scss";
        `
      }
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/presta',
        '/urgences',
        '/equipe',
        '/contact',
      ],
      useRenderEvent: false,
      headless: false,
      onlyProduction: true
    }
  }
};
