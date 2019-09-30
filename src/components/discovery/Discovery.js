import React, { useEffect } from 'react'
import Navbar from '../layout/Navbar';
import DiscoveryCard from './DiscoveryCard';
import Spinner from '../layout/Spinner';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { getKits } from '../../actions/discoveryActions';
import M from 'materialize-css/dist/js/materialize.min.js'


const Discovery = ({ kits: { kits, loading }, getKits }) => {

    useEffect(() => {
        M.AutoInit();
        getKits()
    }, [])

    if (loading || kits === null) {
        return <Spinner />
    }

    return (
        <>
        <div className="row">
            <Navbar />
            <div className="col s8 grey lighten-4">
            <div className="height">
                <h3>8-columns</h3>
                <h4>Search / All Kits</h4>
                <div className="discovery-kits-feed">
                    {[...kits].reverse().map(kit => <DiscoveryCard key={kit.id} kit={kit} />)}
                </div>
            </div>
            </div>

            <div className="col s4 grey lighten-3">
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
    kits: PropTypes.object.isRequired,
    getKits: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    kits: state.kits
})

export default connect(mapStateToProps, { getKits })(Discovery)
