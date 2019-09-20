import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux'

import { getKit } from '../../actions/kitActions';


const Kit = ({ kit: { kit, loading }, getKit }) => {

    // useEffect fetch individual kit

    useEffect(() => {
        getKit(window.location.pathname)
    }, [])
    
    console.log('kit.js [kit]', kit)
    // using the window.location.pathname "/kits/:id" feels like a hack to hit the api - localhost:3000/kits/:id - if i were to change the kits route this would not work.
    console.log('Kit.js [window.location.pathname]', window.location.pathname)
    

    if (loading || kit === null) {
        return <Spinner />
    }

    return (
        <>
        <div className="row">
            
            <div className="col s8 red lighten-4">
            <div className="height">
                <h3>8-columns</h3>
                <h4>Waveform Controls</h4>
                <p>the fetch for an individual kit happens when I click the play link on the discovery page / I'm passing the kit.id as a parameter to the kitAction - getKit function</p>
                <h3>{kit.name}</h3>
                <h6>{kit.detail}</h6>

            </div>
            </div>

            <div className="col s4 green lighten-1">
            <div className="height">
                <h3>4-columns</h3>
                <h4>Regions and Notes</h4>
            </div>
            </div>
        
        </div>  
        </>
    )
}

const mapStateToProps = state => ({
    kit: state.kit
})

export default connect(mapStateToProps, { getKit })(Kit)
