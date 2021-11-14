export function createApp (options) {
  const app = Vue.createApp(options);
  app.config.compilerOptions.delimiters = ["[[", "]]"];
  return app;
};
