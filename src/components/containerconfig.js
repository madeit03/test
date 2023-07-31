import React from "react";
import { inputChange } from '../utils/inputchange';
import { handleFocus, handleBlur } from '../utils/inputactions';
import { handleKey, handleClick } from '../utils/handlesubmit';
import './containerconfig.scss';
const ContainerConfig = (props) => {
    const { inputValue, inputTime, setInputTime, input, submit, appError, obsEle, setInptValue, setData, setErrorTime, errortime } = props;
    return (
        <div className="container-config">
            <div className="config-header">Weather App</div>
            <input ref={input} onFocus={() => {
                handleFocus(inputTime, setInputTime, input, submit)
            }} onBlur={() => {
                handleBlur(inputTime, setInputTime, input, submit);
            }} onKeyDown={(e) => { handleKey(e, inputValue, input, appError, obsEle, setInptValue, setData, setErrorTime, errortime) }} type="text" className="config-input" placeholder="katowice" value={inputValue} onChange={(e) => { inputChange(e, setInptValue) }} />
            <input ref={submit} type="submit" className="config-submit" value="Search" onClick={() => {
                handleClick(inputValue, input, appError, obsEle, setInptValue, setData, setErrorTime, errortime);
            }} />

        </div>
    )
}
export default ContainerConfig;