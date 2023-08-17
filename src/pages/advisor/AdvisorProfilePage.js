import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ProfileTable from '../../components/common/profile/Profile'




function AdvisorProfilePage() {
    return (
        <div>
            <Navbar type={"advisor"} />

            <ProfileTable type={"advisor"} />
        </div>
    )
}

export default AdvisorProfilePage