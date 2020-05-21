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