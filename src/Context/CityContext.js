import { createContext,useContext } from "react";

//export const CityContext= createContext();

const CityContext = createContext();
export function useWeather(){
    return useContext(CityContext);
}

//export default CityContext;