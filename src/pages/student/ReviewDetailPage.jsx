import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import ReviewDetailsTable from '../../components/common/review/ReviewDetailsTable'
import { useParams } from 'react-router-dom'
import { fetchManifestPerReview } from '../../services/student/manifest'

function ReviewDetailPage() {
    const {id} = useParams()
    const [student , setStudent] = useState([])
    const [review , setReview] = useState('')
    useEffect(()=>{
      fetchManifestPerReviewHelper()
    },[])
    const fetchManifestPerReviewHelper = async () =>{
      const data = await fetchManifestPerReview(id)
      setStudent(data?.student)
      setReview(data?.reviews[0])
    }
  return (
    <div>
      <Navbar type={''}/>
      <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-20">
            <ReviewDetailsTable  student={student}  user={'student'} review={review} />
        </section>
      </div>
    
    </div>
  )
}

export default ReviewDetailPage
