import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux'

import { getKit } from '../../actions/kitActions';


const Kit = ({ kit: { kit, loading }, getKit }) => {

    // useEffect fetch individual kit

    useEffect(() => {
        getKit()
    }, [])

    console.log('KIT.JS /KITS/${kit.id}:', kit)

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
