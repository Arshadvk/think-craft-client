import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ReviewListingTable from '../../components/reviewer/ReviewListingTable'
import { reviewslist } from '../../services/advisor/reviews'

function AdvisorReviewsListingPage() {
    const [reviews, setReviews] = useState([])

  useEffect(()=>{
    console.log('hello');
    const fetchReviewsListHelper = async ( )=>{
      const data = await reviewslist()
      console.log("datta" , data);
      setReviews(data)
    }
    fetchReviewsListHelper()
  },[]) 
  return (
    <div>
      <Navbar type={'advisor'} />
      <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-20">
          <ReviewListingTable reviews={reviews ? reviews : []} user={'advisor'}/>
        </section>
      </div>
    </div>
  )
}

export default AdvisorReviewsListingPage
