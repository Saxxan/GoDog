"use strict";
module.exports = (bundler) => {
    bundler.addAssetType('pug', require.resolve('./PugAsset'));
    bundler.addAssetType('jade', require.resolve('./PugAsset'));
};
//# sourceMappingURL=index.js.map