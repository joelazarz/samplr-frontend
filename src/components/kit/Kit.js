import React, { useEffect } from 'react'
import Waveform from '../waveform/Waveform';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux'

import { getKit } from '../../actions/kitActions';


const Kit = ({ kit: { kit, loading }, getKit }) => {

    useEffect(() => {
        getKit(window.location.pathname)
    }, [])
    
    console.log('kit.js [kit]', kit)
    // using the window.location.pathname to direct the action to the endpoint in the api :/
    console.log('Kit.js [window.location.pathname]', window.location.pathname)
    

    if (loading || kit === null) {
        return <Spinner />
    }

    return (
        <>
        <div className="row">
            
            <div className="col s8 grey lighten-4">
                <div className="height">
                    <div className="kit-name-container">
                    <h3>{kit.name}</h3>
                </div>

                <div className="kit-waveform-container">
                    <h2>playback controls</h2>
                    <Waveform key={kit.id} src={kit.sample} />
                    <h3>Region Controls</h3>
                </div>

                <div className="kit-detail-container">
                    Kit Detail
                    <h6>{kit.detail}</h6>
                </div>

            </div>
            </div>


            <div className="col s4 grey lighten-3">
            <div className="height">
            
                <div className="regions-specs">
                    <h4>Region Specs</h4>
                </div>
                <div className="notes-specs">
                    <h4>Notes Specs</h4>
                </div>

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
