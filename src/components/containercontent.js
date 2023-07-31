import React from "react";
import Cloud from './cloud';
import './containercontent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faUmbrella, faDroplet, faClock } from '@fortawesome/free-solid-svg-icons'
const ContainerContent = (props) => {
    const { data } = props;
    return (
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
    )
}
export default ContainerContent;