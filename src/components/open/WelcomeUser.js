import React from 'react'
import { Link } from 'react-router-dom';

export const WelcomeUser = ({ user }) => {
  return (
    <div>
      <div className="card">
      <div className="card-stacked grey lighten-5">
        <div className="card-content">
          <span style={{fontWeight: 'bold', fontSize: '1.3em'}}>Welcome </span>
          <span style={{fontWeight: 'bold', fontSize: '1.3em', color: 'steelblue'}}> {user.username}</span>
        </div>
        <div className="card-action" style={{backgroundColor: 'aliceblue'}}>
          <Link to ="/discovery">Continue to Discovery</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
