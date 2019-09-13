import axios from "axios";

export const API = {
    getWeatherFromWeatherbitAPI (city, key) {
        return(
            axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`)
        )
    },
    getWeatherFromOpenWeatherMapAPI(city, key){
        return(
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        )
    }
}