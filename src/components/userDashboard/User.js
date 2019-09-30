import React from 'react'
import Navbar from '../layout/Navbar';
import NewCrateForm from './NewCrateForm';
import { PropTypes } from 'prop-types';
import Spinner from '../layout/Spinner';

const User = ({ user }) => {
    
    if (user === null) {
        return <Spinner />
    }

    return (
        <>
        <div className="row">
            <Navbar />
            <div className="col s8 orange lighten-4">
            <div className="height">
                <h3>{user.username}</h3>
                <h4>Search / User Crates</h4>
            </div>
            </div>

            <div className="col s4 green lighten-3">
            <div className="height">
                <div className="new-crate-form">
                    <NewCrateForm userId={user.id} />
                </div>
            </div>
            </div>
        
        </div>   
        </>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User
