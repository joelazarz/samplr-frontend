import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';


const LandingPage = ({ setSessionUser, user }) => {

    return (
        <div className="row">

            <div className="col s4 yellow lighten-4">
                <div className="height">

                <div className="container">
                    {user ? <h3>Welcome {user.username}</h3> 
                    : 
                    <>
                    <Signup setSessionUser={setSessionUser} />
                    <Login setSessionUser={setSessionUser} />
                    </>
                }
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
