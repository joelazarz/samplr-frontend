import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import theme from '../layout/Theme';

const DiscoveryCard = ({ kit, nightMode }) => {

    // props from Discovery, individual kit

    return (
        
        <div className="col s4">
        <div className="card small" style={nightMode ? theme.dmBlack : theme.lmDiscoveryCard}>
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={kit.image} alt={kit.name}/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text ">{kit.name}<i className="material-icons right">more_vert</i></span>
            <Link to ={`/kits/${kit.id}`} className="btn btn-sm" style={nightMode ? theme.dmAccent : theme.lmGrey}>Load</Link>
        </div>
        <div className="card-reveal" style={nightMode ? theme.dmBlack : theme.lmDiscoveryCard}>
            <span className="card-title grey-text ">{kit.name}<i className="material-icons right">close</i></span>
            <p className='grey-text'>{kit.detail}</p>
        </div>
        </div>
        </div>

    )
}

DiscoveryCard.propTypes = {
    kit: PropTypes.object.isRequired
}

export default DiscoveryCard
