import React from 'react'
import { Link } from 'react-router-dom'
import theme from './Theme';

const Navbar = ({ nightModeSwitch, nightMode }) => {

    const onSwitch = () => {
        nightModeSwitch()
    }

    return (
        <div className="nav-bar" style={nightMode ? theme.dmUtility : theme.lmNavBar}>
            <Link to ='/discovery'><button  className="waves-effect waves-black white-text btn-flat">Discovery</button></Link>
            <div className="switch">
            <label>
            Off
            <input checked={nightMode ? true : false} onChange={onSwitch} type="checkbox"></input>
            <span className="lever grey"></span>
            On
            </label>
            </div>
            {nightMode ? <i className="night small material-icons">nights_stay</i> : <i className="sunny small material-icons">wb_sunny</i>}
        </div>
    )
}

export default Navbar
