module.exports = {
    siteUrl:'https://yip-iota.vercel.app' || "",
    generateRobotsTxt:false,
    generateIndexSitemap:false,
    exclude:["/state/*"],
    robotsTxtOptions:{
        policies:[
            {
                userAgent:"*",allow:"/"
            }
        ]
    }
}