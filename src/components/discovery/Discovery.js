import React, { useEffect } from 'react'
import DiscoveryCard from './DiscoveryCard';
import Spinner from '../layout/Spinner';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { getKits } from '../../actions/discoveryActions';
import M from 'materialize-css/dist/js/materialize.min.js'
import theme from '../layout/Theme';


const Discovery = ({ kits: { kits, loading }, getKits, nightMode }) => {

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
        <div className="row" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <div className="col s8" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <div className="height" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
                <div className="discovery-kits-feed" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
                    {[...kits].reverse().map(kit => <DiscoveryCard nightMode={nightMode} key={kit.id} kit={kit} />)}
                </div>
            </div>
            </div>

            <div className="col s4" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <div className="height" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
                <h3 className='grey-text'>4-columns</h3>
                <h4 className='grey-text'>New Kits / Featured Kits</h4>

                <div className="active-kits" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
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
