import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNav = props => {

    return (
        <div className='dashNavContainer'>
            <Link to='/dashboard'>Profile</Link>
            <Link to='/dashboard/collection'>Collection</Link>
        </div>
    )
}

export default DashboardNav