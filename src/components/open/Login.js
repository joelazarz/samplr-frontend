import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { withRouter } from 'react-router';


const Login = ({ setSessionUser, history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        if(username === '' || password === ''){
            M.toast({ html: 'Please enter Username and Password' })
        } else {
            const logUser = {
                username,
                password
            }
            fetch('https://sampler-backend.herokuapp.com/login', {
                method: 'POST',
                body: JSON.stringify(logUser),
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                setSessionUser(data)
            })
            .then(history.push('/discovery'))
        }
        setUsername('')
        setPassword('')
    }

    return (
        <>
        <div className="row">
        <div className="landing-input-container">
        <div className="input-field col s12">
            <input 
            placeholder="username" 
            type="text" 
            className="validate"
            value={username}
            onChange={e => setUsername(e.target.value)}></input>
            <label htmlFor="username"></label>
        </div>
        <div className="input-field col s12">
            <input 
            placeholder="password" 
            type="password" 
            className="validate"
            value={password}
            onChange={e => setPassword(e.target.value)}></input>
            <label htmlFor="password"></label>
        </div>
        <button 
        className="landing-button waves-effect black waves-light btn"
        onClick={onSubmit}
        >login</button>
        </div>
        </div>
        </>
    )
}

export default withRouter(Login)
