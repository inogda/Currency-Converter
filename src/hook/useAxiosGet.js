import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setValuta} from "../store/slices/valutaSlice";
const axios = require("axios");


const useAxiosGet = (url) => {
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    url,
                );
                dispatch(setValuta({
                    rateVal: response.data,
                }));
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoaded(true);
            }
        })();
    }, []);
    return { data, error, loaded };
};

export default useAxiosGet;