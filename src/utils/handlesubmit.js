import { getWeather } from "./getweather";
const handleKey = (e, inputValue, input, appError, obsEle, setInptValue, setData, setErrorTime, errortime) => {


    if (e.key == 'Enter') {
        if (inputValue.length > 0) {

            getWeather(inputValue, input, inputValue, appError, obsEle, setInptValue, setData, setErrorTime, errortime);
        }

    }
    else {

    }
}


const handleClick = (inputValue, input, appError, obsEle, setInptValue, setData, setErrorTime, errortime) => {

    if (inputValue.length > 0) {
        getWeather(inputValue, input, inputValue, appError, obsEle, setInptValue, setData, setErrorTime, errortime);
    }
}
export { handleKey, handleClick };