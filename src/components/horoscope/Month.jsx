import React, {useEffect, useState} from "react";
import Horoscope from "./Horoscope";
import {horoscopeAPI} from "../../api/endpointAPI";
import Cookies from "js-cookie";

const Month = () => {

    const handleFetch = () => {
        setIsLoading(true);
        horoscopeAPI.getMonthForecast(Cookies.get('zodiac'))
            .then(res => {
                fetchForecasts(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    };

    useEffect(handleFetch, []);

    let [forecasts, fetchForecasts] = useState(['...', '...', '...']);
    let [isLoading, setIsLoading] = useState(true);

    return <><div/><Horoscope firstPromise={forecasts[0]}
                              secondPromise={forecasts[1]}
                              thirdPromise={forecasts[2]}
                              handleFetch={handleFetch}
                              isLoading={isLoading}/></>
};

export default Month