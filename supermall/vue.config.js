module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': "@/common",
                'components': "@/components",
                'views': "@/views",
                'network': "@/network"
            }
        }
    },
    outputDir: '../public',
    devServer: {
        proxy: { '/api': { target: 'http://www.caiji.me', changeOrigin: true, ws: true, pathRewrite: { '^/api': '/api', } } }
    }
}