import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ReviewerProfile from '../../components/reviewer/profile/ReviewerProfile'

function ReviewerProfilePage() {
  return (
    <div>
       <Navbar type={"reviewer"}/>
       <ReviewerProfile />
    </div>
  )
}

export default ReviewerProfilePage
