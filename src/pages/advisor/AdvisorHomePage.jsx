import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ReviewsList from '../../components/advisor/ReviewsList'
import BookSlotBox from '../../components/advisor/BookSlotBox'
import ReviewsToBeSchedule from '../../components/advisor/schedule/ReviewsToBeSchedule'


function AdvisorHomePage() {
 
  return (
    <div>
      <Navbar type={"advisor"} />
      <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen items-center justify-center pt-20">
          <ReviewsList />
        </section>
      </div>
    </div>
  )
}

export default AdvisorHomePage
