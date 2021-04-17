module.export = {
    configureWebpack: {
        resolve: {
            alias: {
                assets: "@/assets",
                common: "@/common",
                commponents: "@/commponts",
                views: "@/views",
                network: "@/network"
            }
        }
    }
}