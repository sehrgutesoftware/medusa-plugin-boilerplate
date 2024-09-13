const plugins = [
  {
    resolve: "@medusajs/admin",
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      autoRebuild: true,
      develop: {
        open: false,
      },
    },
  },
];

const modules = {
  //
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  plugins,
  modules,
};
