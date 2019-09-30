import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="nav-bar">
            <Link to ='/discovery'><button  className="waves-effect waves-teal btn-flat">Discovery</button></Link>
            <Link to ='/user'><button className="waves-effect waves-teal btn-flat">Profile</button></Link>
        </div>
    )
}

export default Navbar
