import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { getKit } from '../../actions/kitActions';
import { connect } from 'react-redux';

const DiscoveryCard = ({ kit, getKit }) => {

    // props from Discovery, individual kit

    
    const onNavToKit = () => {
        getKit(kit.id)
    }
    

    return (
        <div className="card-panel white">
            {kit.name}
            <div>
            <Link to ={`/kit/${kit.id}`} onClick={onNavToKit} className="btn btn-dark btn-sm">Play</Link>
            </div>
        </div>
    )
}

DiscoveryCard.propTypes = {
    kit: PropTypes.object.isRequired
}

export default connect(null, { getKit })(DiscoveryCard)
