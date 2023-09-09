import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/nav/Navbar";
import ReviewDetailsTable from "../../components/common/review/ReviewDetailsTable";
import { useParams } from "react-router-dom";
import { fetchOneReviewDetails } from "../../services/advisor/reviews";

function AdvisorReviewDetails() {
  const [review , setReview] = useState([])
  const [student , setStudent] = useState([])
  const [mark , setMark ] = useState([])
  const { id } = useParams();
  useEffect(()=>{
    const fetchReviewDetail = async (id) =>{
      const data = await fetchOneReviewDetails(id)
      setReview(data[0])
      setStudent(data[0]?.student)
      setMark(data[0]?.mark)
    } 
    fetchReviewDetail(id)
  },[])
  return (
    <div>
      <Navbar type={"advisor"} />
      <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen  items-center justify-center p-4 pt-20">
            <ReviewDetailsTable review={review.length !==  0 ? review : [] } student={student}  user={'advisor'} mark={mark} id={id} />
        </section>
      </div>
    </div>
  );
}

export default AdvisorReviewDetails;
