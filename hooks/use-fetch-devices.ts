import { useEffect, useState, useTransition } from "react";
import getDevices from "../controllers/getDevices";


const useFetchDevices = () => {
    const [loading, setLoading] = useState(false);
    const [devices, setDevices] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setLoading(true);
        getDevices()
            .then(response => {
                setDevices(response)
            })
            .catch(error => {
                setMessage(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])


    return { loading, devices, message }
};

export default useFetchDevices;