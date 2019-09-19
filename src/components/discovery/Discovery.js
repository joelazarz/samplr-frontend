import React, { useEffect } from 'react'
import DiscoveryCard from './DiscoveryCard';
import Spinner from '../layout/Spinner';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { getKits } from '../../actions/discoveryActions';

const Discovery = ({ kits: { kits, loading }, getKits }) => {

    useEffect(() => {
        getKits()
    }, [])

    console.log('DISCOVERY.JS /KITS:', kits)

    if (loading || kits === null) {
        return <Spinner />
    }

    return (
        <>
        <div className="row">
            
            <div className="col s8 blue lighten-4">
            <div className="height">
                <h3>8-columns</h3>
                <h4>Search / All Kits</h4>
                <div className="container">
                    {kits.map(kit => <DiscoveryCard key={kit.id} kit={kit} />)}
                </div>
            </div>
            </div>

            <div className="col s4 orange lighten-4">
            <div className="height">
                <h3>4-columns</h3>
                <h4>New Kits / Featured Kits</h4>
            </div>
            </div>
        
        </div>
        </>
    )
}

Discovery.propTypes = {
    kits: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    kits: state.kits
})

export default connect(mapStateToProps, { getKits })(Discovery)
