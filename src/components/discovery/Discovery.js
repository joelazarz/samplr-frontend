import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { getKits } from '../../actions/discoveryActions';

const Discovery = ({ kits: { kits, loading }, getKits }) => {

    useEffect(() => {
        getKits()
    }, [])

    console.log('DISCOVERY.JS /KITS:', kits)

    if (loading || kits === null) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            
        </div>
    )
}

Discovery.propTypes = {
    kits: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    kits: state.kits
})

export default connect(mapStateToProps, { getKits })(Discovery)
