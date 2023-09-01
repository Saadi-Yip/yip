import GetBlogCategory from "./use-fetch-blog-categories";

const fetchBlogData = async (currentPage, productPerPage, searchQuery, category) => {
  const { loading, blogs, categories, message, total } = GetBlogCategory(
    currentPage,
    productPerPage,
    searchQuery,
    category
  );

  return { loading, blogs, categories, message, total };
};
export {fetchBlogData}