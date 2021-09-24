export const FETCH_WEATHER = "FETCH_WEATHER"
export const FETCH_WEATHER_LOADING = "FETCH_WEATHER_LOADING"
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR"
export const FETCH_WEATHER_ALERT = "FETCH_WEATHER_ALERT"

export interface Weather {
    id : number
    main: string
    description : string
    icon :string 
}

export interface WeatherInfo {
    base : string 
    clouds: {
        all: number 
    };
     cod : number ;
     coord:{
        lon : number ;
        lat : number ;
     };
     dt: number ;
     id: number;
     main :{
         feels_like: number;
         humidity: number ;
         pressure: number ;
         temp :number ;
         temp_min:number;
         temp_max:number;

     }
     name :string 
     sys:{
        country: string;
        id: number;
        sunrise:number;
        sunset:number ;
        type: number ;
     }

     timezone :number;
     visibility:number;
     weather: Weather[];
     wind : {
         speed: number;
         deg : number ;
     }

}

 export interface WeatherError {
     cod: string 
     message: string 
 }
 export interface WeatherState{
     data : WeatherInfo| null;
     loading : boolean;
     error : string;

 }

 interface FetchWeatherAction {
     type: typeof FETCH_WEATHER
     payload: WeatherInfo
 }
 interface WeatherLoadingAction{
        type : typeof FETCH_WEATHER_LOADING
      
 }
 interface WeatherErrorAction {
     type : typeof FETCH_WEATHER_ERROR
     payload: string
 }

 export type  WeatherAction = FetchWeatherAction | WeatherLoadingAction | WeatherErrorAction

 export interface WeatherAlertAction {
     type : typeof FETCH_WEATHER_ALERT
     payload: string
 }

 export interface AlertState {
     message : string; 
 }