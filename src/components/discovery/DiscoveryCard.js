import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';

const DiscoveryCard = ({ kit }) => {

    // props from Discovery, individual kit

    return (
        <div class="col s7 m5">
        <div class="card">
        <div class="card-image">
            <img src={kit.image} />
            <span class="card-title">{kit.name}</span>  
        </div>
        <div class="card-content">
            <p>{kit.detail}</p>
        </div>
        <div class="card-action">
            <Link to ={`/kits/${kit.id}`} className="btn black btn-sm">Load</Link>
        </div>
        </div>
        </div>

    )
}

DiscoveryCard.propTypes = {
    kit: PropTypes.object.isRequired
}

export default DiscoveryCard
