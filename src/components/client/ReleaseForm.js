import React from 'react'
import { connect } from 'react-redux'
import ClientNav from './ClientNav';

export const ReleaseForm = (props) => {
    return (
        <div>
            <ClientNav />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(ReleaseForm)
