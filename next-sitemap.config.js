const fetch = require('node-fetch'); // Make sure to install the 'node-fetch' package

module.exports = async () => {
  const totalPages = 12; // Adjust based on your total pages
  const blogsPerPage = 6;

  // Fetch your blog data from the backend API to determine the number of blogs
  const response = await fetch('https://backend-yip.cyclic.app/blog');
  const totalBlogs = await response.json();

  const paths = [];

  for (let page = 1; page <= totalPages; page++) {
    paths.push({
      path: `/blog?page=${page}&limit=${blogsPerPage}`,
    });
  }

  return {
    siteUrl: 'https://yip-iota.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/blog'],
    paths,
  };
};
