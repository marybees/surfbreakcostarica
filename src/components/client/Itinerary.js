import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const Itinerary = (props) => {
    return (
        <div>
            <ClientNav />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Itinerary)
