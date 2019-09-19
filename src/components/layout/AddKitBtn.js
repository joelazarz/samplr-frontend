import React from 'react'
import { Link } from 'react-router-dom'

const AddKitBtn = () => {

    return (
        <div className='fixed-action-btn'>
            <a href="#add-kit-modal" className="btn-floating btn-large black darken-2 modal-trigger">
                <i className="large material-icons">add </i></a>
        </div>
    )
}

export default AddKitBtn
