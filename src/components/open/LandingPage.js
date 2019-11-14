import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';


const LandingPage = ({ setSessionUser, user }) => {

    const [login, setLogin] = useState(false)

    return (
        <div className="row">
            <div className="col s4 blue-grey lighten-3">
                <div className="height">
                <div className="container">
                    {user ? 
                    <h3>Welcome {user.username}</h3> 
                    : 
                    <>
                    {login ? <Signup setSessionUser={setSessionUser} />
                    : <Login setSessionUser={setSessionUser} />}
                    <button onClick={()=> setLogin(!login)} className="waves-effect waves-blue light-blue btn-flat">{login ? <>Already a User? Login</> : <>Not a User? Signup</> }</button>
                    </>
                }
                </div>
                </div>
            </div>

            <div className="col s8 blue-grey lighten-4">
            <div className="height">
                <div className="container">
                    <Link to ="/discovery">Discovery</Link>
                </div>
            </div>
            </div>

        </div>
    )
}

export default LandingPage
