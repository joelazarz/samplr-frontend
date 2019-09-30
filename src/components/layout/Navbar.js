import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className="nav-bar">
            <Link to ='/discovery'><button  className="waves-effect waves-teal btn-flat">Discovery</button></Link>
        </div>
    )
}

export default Navbar
