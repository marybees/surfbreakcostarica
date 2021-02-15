import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const Photos = (props) => {
    return (
        <div>
            <ClientNav />
            {/* Header */}
            <div class="bg-turquoise-dark text-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        <span class="block">Your Surf Photos</span>
                    </h2>
                    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div class="inline-flex rounded-md shadow">
                            <a href="mailto:contact@surfbreakcostarica.com?subject=Please email me the e-sign release form" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-turquoise-light hover:bg-turquoise">
                            Send us a reminder
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Photos)
