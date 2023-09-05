import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ReviewDetailsTable from '../../components/common/review/ReviewDetailsTable'
import { useParams } from 'react-router-dom';
import { fetchOneReviewDetails } from '../../services/reviewer/review';

function ReviewerReviewDetail() {
  const [review , setReview] = useState([])
  const [student , setStudent] = useState([])
  const { id } = useParams();
  useEffect(()=>{
    const fetchReviewDetail = async (id) =>{
      const data = await fetchOneReviewDetails(id)
      setReview(data[0]?.reviews[0])
      console.log(data);
      setStudent(data[0]?.student)
    } 
    fetchReviewDetail(id)
  },[])
  return (
    <div>
      <Navbar type={'reviewer'} />
      <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-20">

          <ReviewDetailsTable review={review} student={student} user={'reviewer'} id ={id} />
          
        </section>
      </div>
    </div>
  )
}

export default ReviewerReviewDetail
