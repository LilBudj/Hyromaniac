import React, {useEffect, useState} from "react";
import Horoscope from "./Horoscope";
import {horoscopeAPI} from "../../api/endpointAPI";
import Cookies from "js-cookie";

const Month = () => {

    const handleFetch = () => {
        horoscopeAPI.getMonthForecast(Cookies.get('zodiac'))
            .then(res => {
                fetchForecasts(res.data);
            })
            .catch(err => console.log(err))
    };

    useEffect(handleFetch, []);

    let [forecasts, fetchForecasts] = useState(['...', '...', '...']);
    return <Horoscope firstPromise={forecasts[0]}
                      secondPromise={forecasts[1]}
                      thirdPromise={forecasts[2]}
                      handleFetch={handleFetch} />
};

export default Month