import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ProfileCard from '../../components/advisor/ReviewerList'

function ReviewerListPage() {
  return (
    <div>
      <Navbar type={'advisor'} />
      <ProfileCard />
    </div>
  )
}

export default ReviewerListPage
