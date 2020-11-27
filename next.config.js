const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  webpack: (config, { webpack }) => {
    // 优化打包过滤单测文件
    config.plugins.push(new webpack.IgnorePlugin(/\/test\//))
    // 线上打包分chunk
    if (config.mode === 'production' && config.name === 'client') {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2
    }
    return config
  },
}

module.exports = withBundleAnalyzer(config)
