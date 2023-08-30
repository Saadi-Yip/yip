module.exports = {
    siteUrl: 'https://your-website-url.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/blogs'], 
    paths: (() => {
      const totalPages = 12; 
      const limit = 6; 
      const paths = [];
  
      for (let page = 1; page <= totalPages; page++) {
        paths.push({
          path: `/blog?page=${page}&limit=${limit}`,
        });
      }
  
      return paths;
    })(),
  };
  