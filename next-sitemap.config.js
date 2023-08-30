module.exports = {
    siteUrl: process.env.WEBSITE_URL || "",
    generateRobotsTxt: false,
    generateIndexSitemap: false,
    exclude: ["/state/*"],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    },
    // Include paginated URLs in the sitemap
    additionalSitemaps: [
      `${process.env.WEBSITE_URL}/blog/sitemap.xml`,
    ],
  };
  