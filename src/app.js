import React, { useEffect } from 'react';
import { getWeather } from './utils/getweather';
import './app.scss';
import { useState, useRef } from 'react';
import Error from './components/error';
import ContainerConfig from './components/containerconfig';
import ContainerContent from './components/containercontent';
const App = () => {
    const [inputValue, setInptValue] = useState("");
    const [data, setData] = useState({});
    const [obsEle, setObsEle] = useState([]);
    const [error, setError] = useState(false);
    const [errortime, setErrorTime] = useState({
    });
    const [inputTime, setInputTime] = useState({
        timefocus1: 0,
        timefocus2: 0,
        timeblur1: 0,
        timeblur2: 0,
    })
    const input = useRef();
    const submit = useRef();
    const appError = useRef();
    useEffect(() => {
        getWeather('katowice', input, inputValue, appError, obsEle, setInptValue, setData, setErrorTime);
        setObsEle(document.getElementsByClassName("obs"))
    }, [])
    return (
        <div id="app">
            <div className="app-overlay">
                <Error setRef={appError} />
                <div className="container">
                    <div className="container-color">
                        <ContainerConfig input={input} submit={submit} inputValue={inputValue} inputTime={inputTime} setInputTime={setInputTime} appError={appError} obsEle={obsEle} setInptValue={setInptValue} setData={setData} setErrorTime={setErrorTime} errortime={errortime} />
                        <ContainerContent data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;