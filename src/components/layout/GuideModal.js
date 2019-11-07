import React from 'react'
import theme from './Theme';

const GuideModal = ({ nightMode }) => {

    return (
        <div id='guide-modal' className='modal' style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <div className="modal-content" style={nightMode ? theme.dmSecondary : theme.lmWhite}>
            <h4 className="grey-text">Guide</h4>
            </div>
        </div>
    )

}

export default GuideModal
