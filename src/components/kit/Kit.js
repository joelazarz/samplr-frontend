import React, { useEffect } from 'react'
import NotesCard from './NotesCard';
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
    // console.log('Kit.js [window.location.pathname]', window.location.pathname)
    

    if (loading || kit === null) {
        return <Spinner />
    }

    return (
        <>
        <div className="row">
            
            <div className="col s8 grey lighten-5">
            <div className="kit-main-container">
                <div className="kit-waveform-container">
                    <Waveform key={kit.id} id={kit.id} src={kit.sample} notes={kit.notes} digs={kit.digs} />
                </div>

                <div className="kit-name-container">
                    <span>[ Kit Name ] : {kit.name}</span>
                </div>

                <div className= "kit-detail">
                    <div className="kit-detail-container">
                        <div className="kit-detail-header">
                            [ Kit Detail ]
                        </div>
                        <div className="kit-detail-text-container">
                            <h6>{kit.detail}</h6>
                        </div>
                    </div>

                    <div className="kit-detail-image-container">
                        <img src={kit.image} alt={kit.name} />
                    </div>
                </div>
                </div>
            </div>


            <div className="col s4 grey lighten-3">
            <div className="height">
            
                <div className="regions-specs">
                    <div className="specs-header">
                        <h5>User Stuff / crates / form rendering?</h5>
                    </div>
                </div>
                <div className="notes-specs">
                    <div className="specs-header">
                        <h5>Notes / digs / Help</h5>
                    </div>
                    {kit.notes.map(note => <NotesCard key={kit.id} note={note} />)}
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
