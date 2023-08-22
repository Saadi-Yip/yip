async function getBlogs(
  page: number | null | string,
  limit: number | null,
  search = "",
  category = "",
  skip?: number | null
) {
    const url = `http://localhost:8000/blogs?page=${page}&limit=${limit}&search=${search}&category=${category}&skip=${skip}&status=true`;
  try {
    const controller = new AbortController();
    const signal = controller.signal;

    let response = await fetch(url, { signal });

    if (response) {
      response = await response.json();
    }

    setTimeout(() => {
      if (!response) {
        controller.abort("Slow Internet!");
      }
    }, 10000);

    return response;
  } catch (error) {
    return error;
  }
}

export default getBlogs;
