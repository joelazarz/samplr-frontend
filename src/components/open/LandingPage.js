// import React, { useState } from 'react'
import React from 'react';
import Login from './Login';
// import Signup from './Signup';
import Guide from './Guide';
import { DemoInstructions } from './DemoInstructions';
import Spinner from '../layout/Spinner';
import { WelcomeUser } from './WelcomeUser';


const LandingPage = ({ setSessionUser, user, localStorageToken }) => {

    // const [login, setLogin] = useState(false)

    return (
        <div className="row">
            <div className="col s4 blue-grey lighten-4">
                <div className="height">
                <div className="container">
                <DemoInstructions />
                <div className="landing-logo">
                <div className="graphic-text">
                <span className='graphic-dot'>.</span>sampler<span className='graphic-par'>()</span>
                </div>
                </div>

                {/* FIX */}
                {
                !user && localStorageToken ? <Spinner />  
                : user && localStorageToken ? <WelcomeUser user={user} /> 
                : <>
                {/* {login ? <Signup setSessionUser={setSessionUser} /> */}
                {/* :  */}
                <Login setSessionUser={setSessionUser} />
                {/* } */}
                {/* <button onClick={()=> setLogin(!login)} className="waves-effect waves-blue light-blue btn-flat">{login ? <>Already a User? Login</> : <>Not a User? Signup</> }</button> */}
                </>
                }

                </div>
                </div>
            </div>

            <div className="col s8 blue-grey darken-4">
            <div className="height">
                <div className="container">
                <div className="guide-container">
                    <Guide />
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default LandingPage
