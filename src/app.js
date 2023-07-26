import React, { useEffect } from 'react';

import './app.scss';
import { useState, useRef } from 'react';
// import Temperature from './components/temperature';
// import City from './components/city';
import bg from '../public/img/bg.jpg'
import Cloud from './components/cloud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faUmbrella, faDroplet, faClock } from '@fortawesome/free-solid-svg-icons'
const App = () => {
    const [inputValue, setInptValue] = useState("");
    const [data, setData] = useState({});
    const [obsEle, setObsEle] = useState([])

    const input = useRef();
    const submit = useRef();

    useEffect(() => {
        getWeather('katowice');

        setObsEle(document.getElementsByClassName("obs"))
    }, [])

    const onChange = (e) => {
        return new Promise((resolve, reject) => {
            let value = e.target.value;
            resolve(
                value = value.toLowerCase()
            )
        })
            .then((value) => {
                return new Promise((resolve, reject) => {
                    let newValue = "";
                    for (let i = 0; i < value.length; i++) {
                        switch (value[i]) {
                            case 'ę': {
                                newValue += 'e';
                            }
                                break;
                            case 'ó': {
                                newValue += 'o';
                            }
                                break;
                            case 'ą': {
                                newValue += 'a';
                            }
                                break;
                            case 'ś': {
                                newValue += 's';
                            }
                            case 'ł': {
                                newValue += 'l';
                            }
                                break;
                            case 'ż': {
                                newValue += 'z';
                            }
                                break;
                            case 'ź': {
                                newValue += 'z';
                            }
                                break;
                            case 'ć': {
                                newValue += 'c';
                            }
                                break;
                            case 'ń': {
                                newValue += 'n';
                            }
                                break;
                            default: {
                                newValue += value[i];
                            }
                                break;
                        }

                    }
                    resolve(newValue);


                })
                    .then((value) => {

                        setInptValue(value);

                    })

            })




    }
    let timefocus1;
    let timefocus2;

    let timeblur1;
    let timeblur2;
    const handleFocus = () => {
        clearTimeout(timeblur1);
        clearTimeout(timeblur2);

        timefocus1 = setTimeout(() => {
            input.current.classList += " config-submit-change";
        }, 0)

        timefocus2 = setTimeout(() => {
            submit.current.classList += " config-submit-show";
        }, 200);



    }
    const handleBlur = () => {
        clearTimeout(timefocus1);
        clearTimeout(timefocus2);
        timeblur1 = setTimeout(() => {

            submit.current.classList = "config-submit";
        }, 0);
        timeblur2 = setTimeout(() => {
            input.current.classList = "config-input";
        }, 200);
    }
    const handleKey = (e) => {

        if (e.key == 'Enter') {
            if (inputValue.length > 0) {
                getWeather(inputValue);
            }

        }
        else {

        }
    }

    const getWeather = (city) => {
        console.log('wysylam req ', city)
        const url_basic = 'https://danepubliczne.imgw.pl/api/data/synop/station/';
        const url_ready = url_basic + city;
        console.log('dane do req:', url_ready);

        fetch(url_ready, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })

            .then((res) => {
                return new Promise((resolve, reject) => {
                    console.log(res);
                    if (res.status == 200) {
                        if (inputValue.length > 0) {
                            input.current.placeholder = inputValue;
                        }

                        console.log(res)

                        resolve(res.json())
                    }
                    else {
                        console.log(res);
                        // console.log('cos sie zepulo');

                        resolve({ xd: 0 })

                    }
                })


            })
            .then((res) => {

                if (res.xd != 0) {

                    console.log(obsEle, "heererere")

                    for (let i = 0; i < obsEle.length; i++) {
                        obsEle[i].classList += " obsmove";
                    }
                    setTimeout(() => {
                        for (let i = 0; i < obsEle.length; i++) {
                            obsEle[i].classList.remove("obsmove");
                        }
                    }, 300)


                    setInptValue("")
                    console.log(res)
                    let { temperatura, predkosc_wiatru, wilgotnosc_wzgledna, data_pomiaru } = res;
                    temperatura = Number.parseInt(temperatura);
                    wilgotnosc_wzgledna = Number.parseInt(wilgotnosc_wzgledna);
                    let rain_chance = Number.parseInt((Math.random() * 30) + 10);
                    setData({
                        temperatura,
                        predkosc_wiatru,
                        wilgotnosc_wzgledna,
                        rain_chance,
                        data_pomiaru,
                    })
                }
                else {
                    setInptValue("")
                }


            })

    }
    const handleClick = () => {
        if (inputValue.length > 0) {
            getWeather(inputValue);
        }


    }
    // °C
    return (
        <div id="app">
            <div className="app-overlay">
                <div className="container">

                    <div className="container-config">
                        <div className="config-header">Weather App</div>
                        <input ref={input} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={(e) => { handleKey(e) }} type="text" className="config-input" placeholder="katowice" value={inputValue} onChange={(e) => { onChange(e) }} />
                        <input ref={submit} type="submit" className="config-submit" value="Search" onClick={handleClick} />
                    </div>

                    <div className="container-content">
                        <div className="content-top">

                            <Cloud className="top-cloud" />
                            <div className="top-temp obs">{data.temperatura}°C</div>

                        </div>

                        <div className="content-mid">
                            <div className="mid-wind">
                                <FontAwesomeIcon icon={faWind} className="wind-icon" />
                                <div className="wind-value obs">{data.predkosc_wiatru}</div>
                                <div className="wind-direction">North</div>
                                <div className="wind-mph">MPH</div>
                            </div>

                            <div className="mid-rain">
                                <FontAwesomeIcon icon={faUmbrella} className="rain-icon" />
                                <div className="rain-value obs">{data.rain_chance}</div>
                                <div className="rain-chance">Chance</div>
                                <div className="rain-per">%</div>
                            </div>

                            <div className="mid-humidity">
                                <FontAwesomeIcon icon={faDroplet} className="humidity-icon" />
                                <div className="humidity-value obs">{data.wilgotnosc_wzgledna}</div>
                                <div className="humidity-name">Humidity</div>
                                <div className="humidity-per">%</div>
                            </div>

                        </div>

                        <div className="content-bottom">
                            <FontAwesomeIcon className="bottom-icon" icon={faClock} />
                            <div className="bottom-value obs">{data.data_pomiaru}</div>
                        </div>


                    </div>

                </div>
            </div>


        </div>

    )
}
export default App;