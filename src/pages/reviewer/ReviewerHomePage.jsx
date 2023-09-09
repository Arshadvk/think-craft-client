import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import AddSlot from '../../components/reviewer/AddSlot'
import ReviewCard from '../../components/reviewer/ReviewCard'
import { fetchReviewList } from '../../services/reviewer/review'


function ReviewerHomePage() {
const [reviewData, setReviewData] = useState([]);
useEffect(()=>{
  reviewList()

},[])
const reviewList = async () => {
      const res = await fetchReviewList();
      setReviewData(res);
    };
  return (
    <div>
       <Navbar type={"reviewer"}/>
       <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen items-center justify-center pt-20">
      <ReviewCard reviewData={reviewData}/>
      </section>
      </div>
    </div>
  )
}

export default ReviewerHomePage
