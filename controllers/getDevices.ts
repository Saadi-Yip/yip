async function getDevices(

) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}device`;
    try {
        const controller = new AbortController();
        const signal = controller.signal;

        const response = await fetch(url, { signal });

        setTimeout(() => {
            if (!response) {
                controller.abort("Slow Internet!");
            }
        }, 10000);

        if(response.ok){
            const data = await response.json();
            return data;
        ;}

        return response;
    } catch (error) {
        return error;
    }
}

export default getDevices;
