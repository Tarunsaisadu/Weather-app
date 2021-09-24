import { AlertState,FETCH_WEATHER_ALERT,WeatherAlertAction } from "../store/types";

const initialState:AlertState = {
    message:"",

}

export default (state = initialState, action:WeatherAlertAction):AlertState =>{
    switch(action.payload){
        case FETCH_WEATHER_ALERT:
            return{
                message:action.payload
            }
         default:
             return state
    }
 
}