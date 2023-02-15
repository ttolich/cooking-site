import React, { useContext } from "react";
import useWeather from "../../http/useWeather";
import WeatherToday from "../WeatherToday";
import ForecastCards from "../ForecastCards";

const WeatherWidget = () => {
    const { data, list, loading } = useWeather(
        'https://api.openweathermap.org/data/2.5/forecast?q=zaporizhzhya,ukrain&units=metric'
    );

    return (
        <div className="weather-widget-contain">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <WeatherToday />
                    <ForecastCards list={list} />
                </>
            )}
        </div>
    );
};

export default WeatherWidget;
