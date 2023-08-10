import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import AdvisorProfile from '../../components/advisor/profile/AdvisorProfile'



function AdvisorProfilePage() {
    return (
        <div>
      <Navbar type={"advisor"}/>
            
         <AdvisorProfile type={"advisor"}/>
        </div>
    )
}

export default AdvisorProfilePage