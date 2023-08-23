import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ProfileCard from '../../components/advisor/ReviewerList'

function ReviewerListPage() {
  return (
    <div>
      <Navbar type={'advisor'} />
      <div className="lg:ml-64">
    <section className="bg-gray-50 min-h-screen items-center justify-center pt-24">
      <ProfileCard />
      </section>
    </div>
    </div>
  )
}

export default ReviewerListPage
