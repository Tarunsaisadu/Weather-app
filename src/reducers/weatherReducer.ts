import { WeatherState,WeatherAction, FETCH_WEATHER, FETCH_WEATHER_LOADING, FETCH_WEATHER_ERROR } from "../store/types";

const initialState: WeatherState = {

    data :null,
    loading : false,
    error : ""
}

export default (state=initialState, action: WeatherAction ) : WeatherState =>{
    switch (action.type){
        case FETCH_WEATHER: 

            return {

                data:action.payload,
                loading:false,
                error:"",
            }
        case FETCH_WEATHER_LOADING:
            return{
                ...state,
                loading:true
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                error:action.payload,
                loading: false
            }
            default:
            return state;
    }
}