import React from "react";
import './error.scss';
const Error = (props) => {
    return (
        <div className="app-error" ref={props.setRef} >Sorry but we do not have information about this city.</div>
    )
}
export default Error;