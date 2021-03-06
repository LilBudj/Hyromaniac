import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://chiromancy.herokuapp.com/'
});

export const horoscopeAPI = {
    getDailyForecast(zodiac){
        return instance.get(`/daily?zodiac=${zodiac}`)
    },
    getWeeklyForecast(zodiac){
        return instance.get(`/week?zodiac=${zodiac}`)
    },
    getMonthForecast(zodiac, month){
        return instance.get(`/month?zodiac=${zodiac}&month=${month}`)
    }
};
export const palmistryAPI = {
    getPalmistryData(){
        return instance.get(`palmistry`)
    }
};
export const compatibilityAPI = {
    getCompatibilityForecast(zodiacFirst, zodiacSecond) {
        return instance.get(`compatibility?zodiac_first=${zodiacFirst}&zodiac_second=${zodiacSecond}`)
    }
};