async function getBlogs(
  page: number | null | string,
  limit: number | null,
  search = "",
  category = "",
  skip?: number | null
) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}blog?limit=${limit}&search=${search}&category=${category}&page=${skip}&status=true`;
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
