import { FETCH_WEATHER_ALERT,WeatherAlertAction } from "../store/types";

export const setAlert = (message:string):WeatherAlertAction =>{
    return {
        type : FETCH_WEATHER_ALERT,
        payload:message
    }
} 