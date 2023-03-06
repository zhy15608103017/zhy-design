module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-zhyDesign`
  extends: ["zhyDesign"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
