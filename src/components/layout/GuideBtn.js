import React from 'react'

const GuideBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a href="#guide-modal" className="btn-floating btn-medium black darken-2 modal-trigger">
            <i className="large material-icons">info_outline </i></a>
            <h6 className='grey-text'>Guide</h6>
        </div>
    )
}

export default GuideBtn
