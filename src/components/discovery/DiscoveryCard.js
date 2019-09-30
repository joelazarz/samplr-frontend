import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';

const DiscoveryCard = ({ kit }) => {

    // props from Discovery, individual kit

    return (
        
        <div className="col s4">
        <div className="card small black">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={kit.image} alt={kit.name}/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text ">{kit.name}<i className="material-icons right">more_vert</i></span>
            <Link to ={`/kits/${kit.id}`} className="btn btn-sm" style={{background: '#091F22'}}>Load</Link>
        </div>
        <div className="card-reveal black">
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
