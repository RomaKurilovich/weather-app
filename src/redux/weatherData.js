
import { API } from "../api/axios-instance";

const CHANGE_CITY = 'WD/CHANGE_CITY';
const SET_WEATHER_FROM_OWN = 'WD/SET_WEATHER_FROM_OWN';
const SET_WEATHER_FROM_WEATHER_BIT = 'SET_WEATHER_FROM_WEATHER_BIT';
const CHANGE_SELECTED = 'WD/CHANGE_SELECTED';


let initialState = {

    status: 'not_init',
    city: '',
    selected: 'OpenWeatherMap',

    OpenWeatherMap: {
        API_KEY: '1ae16df993c07c547ccd1942b3965093', 
        data:{
            temp: undefined,
            pressure: undefined,
            humidity: undefined,
            windSpeed: undefined,
        },
    },
    Weatherbit: {
        API_KEY: '52179b72c8b24feabe273665f8d40b68',
        data: {
            temp: undefined,
            pressure: undefined,
            humidity: undefined,
            windSpeed: undefined,
        },
    },
}


export const changeCity = (value) =>({ type: CHANGE_CITY, value: value});
export const changeSelected = (value) =>({ type: CHANGE_SELECTED, value: value});

export const setWeatherFromOWM = (temp, pressure, humidity, windSpeed) => ({ type: SET_WEATHER_FROM_OWN, 
    temp: temp,
    pressure: pressure,
    humidity: humidity,
    windSpeed: windSpeed,
});
export const setWeatherFromWeatherbit = (temp, pressure, humidity, windSpeed) => ({ type: SET_WEATHER_FROM_WEATHER_BIT, 
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
            case SET_WEATHER_FROM_WEATHER_BIT: {
                let newData = {
                    temp: action.temp,
                    pressure: action.pressure,
                    humidity: action.humidity,
                    windSpeed: action.windSpeed,
                };
                return{
                    ...state, Weatherbit:{...state.Weatherbit, data: newData}
                }
            }
            case CHANGE_SELECTED: {
                return {...state, selected: action.value}
            }

        default: return state
    }
}   



export const getWeatherFromOpenWeatherMap = () => async(dispatch, getState) => {
    try {
    let state = getState();
    const res = await API.getWeatherFromOpenWeatherMapAPI(state.data.city, state.data.OpenWeatherMap.API_KEY)
    dispatch(setWeatherFromOWM(Math.round(res.data.main.temp-273), res.data.main.pressure, res.data.main.humidity,res.data.wind.speed))
} catch(error) {
    alert(error.response.data.message)
} }

export const getWeatherFromWeatherbit = () => async(dispatch, getState) => {

    let state = getState();
    const res = await API.getWeatherFromWeatherbitAPI(state.data.city, state.data.Weatherbit.API_KEY)
    if (res.data) {
    let data = res.data.data[0];
    dispatch(setWeatherFromWeatherbit(Math.round(data.temp), data.pres, data.rh, data.wind_spd))}
}


export default weatherData;