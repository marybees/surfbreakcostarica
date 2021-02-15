import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const Itinerary = (props) => {
    return (
        <div>
            <ClientNav />
            {/* Header */}
            <div class="bg-turquoise-dark text-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        <span class="block">Your Surf Itinerary</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Itinerary)
