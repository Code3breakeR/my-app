import React from 'react'
import './Alert.css'

const Alert = (props) => {

    return (props.alert) && <div className="alert">
            {/* <span class="closebtn"></span> */}
            {props.alert.message} {props.alert.type}
        </div>
}

export default Alert;
