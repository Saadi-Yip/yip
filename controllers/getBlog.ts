async function getBlog(slug: string | undefined | string[]) {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}blog?slug=${slug}&status=true`;

    try {
        const controller = new AbortController();
        const signal = controller.signal;

        let response:any = await fetch(url, { signal });

        setTimeout(() => {
            if (!response) {
                controller.abort("Slow Internet!");
            }
        }, 10000);

        if (!response.ok) {
            return new Error("Something went wrong")
        };

        if (response) {
            response = await response.json();
        }
        return response.blogs;
    } catch (error) {
        return error;
    }
}

export default getBlog;