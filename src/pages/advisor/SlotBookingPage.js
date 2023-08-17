import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import SlotBooking from '../../components/advisor/SlotBooking'

function SlotBookingPage() {
  return (
    <div>
      <Navbar type={'advisor'}/>
      <SlotBooking />
    </div>
  )
}

export default SlotBookingPage
