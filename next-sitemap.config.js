module.exports = {
    siteUrl:process.env.WEBSITE_URL || "",
    generateRobotsTxt:true,
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