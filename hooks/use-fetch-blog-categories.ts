import { useEffect, useState } from "react";
import getBlogs from "../controllers/getBlogs";
import getCategories from "../controllers/getCategories";

const useBlogCategory = (currentPage: number, productPerPage: number, searchQuery?: string, category?: string) => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [total,setTotal] = useState<number>(0);
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setLoading(true);

        Promise.all([
            getBlogs("", productPerPage, searchQuery, category, currentPage),
            categories.length === 0 ? getCategories() : "",
        ])
            .then((results) => {
                const [fetchedBlogs, fetchedCategories]: [any, any] = results;
                setBlogs(fetchedBlogs.blogs);
                setTotal(fetchedBlogs.total)

                if (fetchedCategories) {
                    setCategories(fetchedCategories)
                };

                if (fetchedBlogs.length === 0) {
                    setMessage("Not Found!");
                }
                else {
                    setMessage("");
                };
            })
            .catch((error) => {
                setMessage(error.message)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [currentPage, searchQuery, category])


    return { loading, blogs, categories, message,total }
};

export default useBlogCategory;