import axios from "axios"

const CHANGE_CITY = 'WD/CHANGE_CITY';
const SET_WEATHER_FROM_OWN = 'WD/SET_WEATHER_FROM_OWN'

let initialState = {

    status: 'not_init',
    city: '',

    OpenWeatherMap: {
        API_KEY: '1ae16df993c07c547ccd1942b3965093', 
        data:{
        temp: undefined,
        pressure: undefined,
        humidity: undefined,
        windSpeed: undefined,
        },
    }
}

export const changeCity = (value) =>({ type: CHANGE_CITY, value: value});
export const setWeatherFromOWM = (temp, pressure, humidity, windSpeed) => ({ type: SET_WEATHER_FROM_OWN, 
    temp: temp,
    pressure: pressure,
    humidity: humidity,
    windSpeed: windSpeed,
});

const weatherData = (state = initialState, action) => {
    switch (action.type) {
            case CHANGE_CITY: {
                return {...state, city: action.value}
            }
            case SET_WEATHER_FROM_OWN: {
                let newData = {
                    temp: action.temp,
                    pressure: action.pressure,
                    humidity: action.humidity,
                    windSpeed: action.windSpeed,
                };
                return{
                    ...state, OpenWeatherMap:{...state.OpenWeatherMap, data: newData}
                }
            }
        default: return state
    }
}   



export const getWeatherFromOpenWeatherMap = () => async(dispatch, getState) => {
    let state = getState();
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.data.city}&appid=${state.data.OpenWeatherMap.API_KEY}`)
    console.log(res.data);
    dispatch(setWeatherFromOWM(Math.ceil(res.data.main.temp-273), res.data.main.pressure, res.data.main.humidity,res.data.wind.speed))
}

export default weatherData;