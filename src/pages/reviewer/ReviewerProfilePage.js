import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ProfileTable from '../../components/common/profile/Profile'


function ReviewerProfilePage() {
  return (
    <div>
       <Navbar type={"reviewer"}/>
       <ProfileTable type={'reviewer'} />
    </div>
  )
}

export default ReviewerProfilePage
