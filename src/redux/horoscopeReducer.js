import {horoscopeAPI} from "../api/endpointAPI";

const FETCH_HOROSCOPE_DATA = 'horoscope_reducer/FETCH_HOROSCOPE_DATA';
const SET_ZODIAC = 'horoscope_reducer/SET_ZODIAC';

const initState = {
    dailyForecasts: ["", "", ""],
    zodiac: "Aries"
};

export const horoscopeReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_HOROSCOPE_DATA: {
            return {
                ...state,
                dailyForecasts: action.forecasts
            }
        }
        case SET_ZODIAC: {
            return {
                ...state,
                zodiac: action.zodiac
            }
        }
        default: return state
    }
};

const uploadHoroscopeAC = (forecasts) => ({type: FETCH_HOROSCOPE_DATA, forecasts});
export const setZodiacAC = (zodiac) => ({type: SET_ZODIAC, zodiac});

export const fetchHoroscope = (zodiac) => {
    return async (dispatch) => {
        let response = await horoscopeAPI.getDailyForecast(zodiac);
        dispatch(uploadHoroscopeAC(response.data))
    }
};