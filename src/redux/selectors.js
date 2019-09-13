export const getData = (state) => {
    if (state.data.selected === 'OpenWeatherMap'){
        return state.data.OpenWeatherMap.data
    }   
    if (state.data.selected === 'Weatherbit'){
        return state.data.Weatherbit.data
    }
    else return state.data.OpenWeatherMap.data
}