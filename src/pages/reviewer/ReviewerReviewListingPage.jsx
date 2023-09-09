import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import { fetchReviewList } from '../../services/reviewer/review'
import ReviewListingTable from '../../components/reviewer/ReviewListingTable'

function ReviewerReviewListingPage() {

  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    console.log('hello');
    const fetchReviewsListHelper = async ( )=>{
      const data = await fetchReviewList()
      console.log("datta" , data[0]);
      setReviews(data)
    }
    fetchReviewsListHelper()
  },[])
  return (
    <div>
      <Navbar type={'reviewer'} />
      <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-20">
          <ReviewListingTable reviews={reviews} user={'reviewer'}/>
        </section>
      </div>
    </div>
  )
}

export default ReviewerReviewListingPage
