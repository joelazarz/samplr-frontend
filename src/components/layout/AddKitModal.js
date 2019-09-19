import React from 'react'

const AddKitModal = () => {

    return (
        <div id="add-kit-modal" className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Add Kit</h4>

                <div className='row'>
                    <div className='input-field'>
                        <input type='text'/>
                        <label htmlFor='message' className='active'>Kit Field</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input type='text'/>
                        <label htmlFor='message' className='active'>Kit Field</label>
                    </div>
                </div>

            </div>
            <div className='modal-footer'>
                <a href='#!'
                className='modal-close waves-effect black waves-light btn'>Enter</a>
            </div>
        </div>
    )

}

const modalStyle = {
    width: '65%',
    height: '65%'
}

export default AddKitModal
