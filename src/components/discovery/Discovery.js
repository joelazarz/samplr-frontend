import React, { useEffect } from 'react'
import DiscoveryCard from './DiscoveryCard';
import Spinner from '../layout/Spinner';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { getKits } from '../../actions/discoveryActions';
import { Link } from 'react-router-dom'
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

    const randomKit = kits[Math.floor(Math.random()*kits.length)]

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

            <div className="col s4" style={nightMode ? theme.dmPrimary : theme.lmDiscoverySide}>
            <div className="height" style={nightMode ? theme.dmPrimary : theme.lmDiscoverySide}>

                <div className="active-kits" style={nightMode ? theme.dmPrimary : theme.lmDiscoverySide}>
                    <div className='random-kit-header' style={nightMode ? theme.dmPrimary : theme.lmDiscoverySide}></div>
                    <Link to ={`/kits/${randomKit.id}`} ><img src={randomKit.image} alt={randomKit.name}></img></Link>
                </div>

                <div className="graphic-container" style={nightMode ? theme.dmGraphic : theme.lmGraphic}>
                <div className="graphic-text">
                <span className='graphic-dot'>.</span>sampler<span className='graphic-par'>()</span>
                </div>
                <div className='graphic-sub-text'>
                    <ul>p2p audio workstation</ul>
                    <ul> + upload samples</ul>
                    <ul> + load/save loops//regions</ul>
                    <ul> + annotate samples</ul>
                </div>
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
