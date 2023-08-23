import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import SlotBooking from '../../components/advisor/SlotBooking'
import ReviewerDetails from '../../components/advisor/ReviewerDetails'
import { findReviewer, findSlot } from '../../services/advisor/reviews'
import { useParams } from 'react-router-dom'

function SlotBookingPage() {
  const {id} = useParams()
  const [slots, setSlots] = useState()
  const [reviewer , setReviewer] = useState()

  useEffect(()=>{
    fetchSlotHelper()
    fetchReviewerHelper()
  },[id])

  const fetchSlotHelper = async () =>{
    try {
      const response = await findSlot(id)
      setSlots(response.data)
    } catch (error) {
      console.log('error' , error.response);
    }
  }
  const fetchReviewerHelper = async () =>{
    try {
      const reviewerData = await findReviewer(id)
      setReviewer(reviewerData)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(reviewer);
  console.log(slots);
  return (
    <div>
      <Navbar type={'advisor'}/>
      <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen flex pt-24">
      <ReviewerDetails reviewer={reviewer}/>
      <SlotBooking slots={slots} />
      
      
      </section>
      </div>
    </div>
  )
}

export default SlotBookingPage
