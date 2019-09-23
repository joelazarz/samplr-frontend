import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';

const DiscoveryCard = ({ kit }) => {

    // props from Discovery, individual kit

    return (
        <div className="card-panel white">
            {kit.name}
            <div>
                <Link to ={`/kits/${kit.id}`} className="btn black btn-sm">Load</Link>
            </div>
        </div>
    )
}

DiscoveryCard.propTypes = {
    kit: PropTypes.object.isRequired
}

export default DiscoveryCard
