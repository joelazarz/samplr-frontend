import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';


const LandingPage = ({ setSessionUser }) => {
    return (
        <div className="row">

            <div className="col s4 yellow lighten-4">
                <div className="height">
                <h3>4-columns</h3>
                <h4>Login</h4>

                <div className="container">
                    SIGNUP
                    <Signup setSessionUser={setSessionUser} />
                    LOGIN
                    <Login setSessionUser={setSessionUser} />
                </div>

                </div>
            </div>

            <div className="col s8 blue-grey lighten-4">
            <div className="height">
                <h3>8-columns</h3>
                <h4>Guide</h4>
                <div className="container">
                    Scrollable Guide

                    <div className="container">
                    <Link to ="/discovery">Discovery</Link>
                    </div>

                </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage
