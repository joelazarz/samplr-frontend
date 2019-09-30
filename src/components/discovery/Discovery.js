import React, { useEffect } from 'react'
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

    const activeKits = kits[Math.floor(Math.random()*kits.length)]

    return (
        <>
        <div className="row" style={{background: '#282D38'}}>
            <div className="col s8" style={{background: '#282D38'}}>
            <div className="height" style={{background: '#282D38'}}>
                <div className="discovery-kits-feed" style={{background: '#282D38'}}>
                    {[...kits].reverse().map(kit => <DiscoveryCard key={kit.id} kit={kit} />)}
                </div>
            </div>
            </div>

            <div className="col s4" style={{background: '#262633'}}>
            <div className="height" style={{background: '#262633'}}>
                <h3 className='grey-text'>4-columns</h3>
                <h4 className='grey-text'>New Kits / Featured Kits</h4>

                <div className="active-kits" style={{background: '#262633'}}>
                    {console.log('Active Kits - Discovery.js',activeKits)}
                </div>

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
