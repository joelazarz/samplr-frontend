import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className="nav-bar" style={{background: '#202124'}}>
            <Link to ='/discovery'><button  className="waves-effect waves-black grey-text btn-flat">Discovery</button></Link>
        </div>
    )
}

export default Navbar
