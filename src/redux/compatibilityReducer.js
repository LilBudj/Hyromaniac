import {compatibilityAPI} from "../api/endpointAPI";

const GET_COMPATIBILITY_FORECAST = 'compatibility_reducer/GET_COMPATIBILITY_FORECAST';
const SET_SECOND_ZODIAC = 'compatibility_reducer/SET_SECOND_ZODIAC';
const SET_MODAL = 'compatibility_reducer/SET_MODAL';

const initState = {
    matchZodiac: 'Aries',
    UnionName: "",
    body: "",
    percentInLove: 50,
    percentInMarried: 50,
    overallPercent: 50,
    isModal: false,
    isLoading: true
};

export const compatibilityReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COMPATIBILITY_FORECAST: {
            return {
                ...state,
                ...action.data,
                overallPercent: Math.sqrt((action.data.percentInLove * action.data.percentInMarried)),
                isLoading: false,
            }
        }
        case SET_SECOND_ZODIAC: {
            return {
                ...state,
                matchZodiac: action.matchZodiac
            }
        }
        case SET_MODAL: {
            return {
                ...state,
                isModal: !state.isModal
            }
        }
        default: return state
    }
};

const getForecastAC = (data) => ({type: GET_COMPATIBILITY_FORECAST, data});
export const setSecondZodiac = (matchZodiac) => ({type: SET_SECOND_ZODIAC, matchZodiac});
export const setModal = () => ({type: SET_MODAL});

export const getForecast = (zodiacFirst, zodiacSecond) => (
    async (dispatch) => {
        let response = await compatibilityAPI.getCompatibilityForecast(zodiacFirst, zodiacSecond);
        dispatch(getForecastAC(response.data))
    }
);