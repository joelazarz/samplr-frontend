import React from 'react'
import { Link } from 'react-router-dom'
import theme from './Theme';

const Navbar = ({ nightModeSwitch, nightMode }) => {

    const onSwitch = () => {
        nightModeSwitch()
    }

    return (
        <div className="nav-bar" style={nightMode ? theme.dmPrimary : theme.lmLightBlue}>
            <Link to ='/discovery'><button  className="waves-effect waves-black grey-text btn-flat">Discovery</button></Link>
            <div className="switch">
            <label>
            Off
            <input checked={nightMode ? true : false} onChange={onSwitch} type="checkbox"></input>
            <span className="lever grey"></span>
            On
            </label>
            </div>
        </div>
    )
}

export default Navbar
