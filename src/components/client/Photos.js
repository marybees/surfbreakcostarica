import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const Photos = (props) => {
    return (
        <div>
            <ClientNav />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Photos)
