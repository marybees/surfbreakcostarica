import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const Itinerary = (props) => {
    return (
        <div>
            <ClientNav />
            {/* Header */}
            <div class="bg-gray-light">
                <h2 class="text-2xl font-bold leading-7 text-gray-darkest sm:text-3xl sm:truncate px-8 py-8">
                    Your Surf Itinerary
                </h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Itinerary)
