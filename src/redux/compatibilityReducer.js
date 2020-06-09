import {compatibilityAPI} from "../api/endpointAPI";

const GET_COMPATIBILITY_FORECAST = 'compatibility_reducer/GET_COMPATIBILITY_FORECAST';
const SET_SECOND_ZODIAC = 'compatibility_reducer/SET_SECOND_ZODIAC';

const initState = {
    matchZodiac: 'Aries',
    UnionName: "",
    body: "",
    percentInLove: 50,
    percentInMarried: 50
};

export const compatibilityReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COMPATIBILITY_FORECAST: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_SECOND_ZODIAC: {
            return {
                ...state,
                matchZodiac: action.matchZodiac
            }
        }
        default: return state
    }
};

const getForecastAC = (data) => ({type: GET_COMPATIBILITY_FORECAST, data});
export const setSecondZodiac = (matchZodiac) => ({type: SET_SECOND_ZODIAC, matchZodiac});

export const getForecast = (zodiacFirst, zodiacSecond) => (
    async (dispatch) => {
        let response = await compatibilityAPI.getCompatibilityForecast(zodiacFirst, zodiacSecond);
        dispatch(getForecastAC(response.data))
    }
);