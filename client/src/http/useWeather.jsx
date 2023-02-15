import { useState, useEffect } from "react";
import {getWeather} from "./userAPI";

const useWeather = url => {
    const [data, setData] = useState(null);
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         const fetchData = async () => {
            const API_KEY = "908ad75f36452c11ff4306cd53162218";
            const response = await getWeather(`${url}&appid=${API_KEY}`);

            const listByDay = response.list.filter(day =>
                day.dt_txt.endsWith("15:00:00")
            );

            setData(response);
            setList(listByDay);
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return { data, list, loading };
};

export default useWeather;
