const copy = require('rollup-plugin-copy');

module.exports = (rollupConfig, _projectOptions) => {
  rollupConfig.plugins.push(
    copy({
      targets: [
        {
          src: 'libs/rsbuild-plugin/LICENSE',
          dest: 'libs/rsbuild-plugin/dist',
        },
      ],
    }),
  );
  rollupConfig.input = {
    index: 'libs/rsbuild-plugin/src/cli/index.ts',
    utils: 'libs/rsbuild-plugin/src/utils/index.ts',
    constant: 'libs/rsbuild-plugin/src/utils/constant.ts',
    manifest: 'libs/rsbuild-plugin/src/cli/manifest.ts',
  };
  return rollupConfig;
};
