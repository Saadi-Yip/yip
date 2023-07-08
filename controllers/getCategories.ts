async function getCategories() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}category`;
  try {
    const controller = new AbortController();
    const signal = controller.signal;

    let response = await fetch(url, { signal });

    if (response) {
      response = await response.json()
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

export default getCategories;
