async function getServices(zipCode: string, speed: null | number = null) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}address?zip_code=${zipCode}&speed=${speed}`;

  try {
    const controller = new AbortController();
    const signal = controller.signal;

    const response = await fetch(url, { signal });

    setTimeout(() => {
      if (!response) {
        controller.abort("Slow Internet!");
      }
    }, 10000);

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}

export default getServices;
