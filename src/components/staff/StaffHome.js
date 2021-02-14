import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../../Navigation';

export const StaffHome = (props) => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps)(StaffHome)
