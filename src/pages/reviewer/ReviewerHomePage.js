import React from 'react'
import AddSlot from '../../components/reviewer/home/AddSlot'
import Navbar from '../../components/common/nav/Navbar'


function ReviewerHomePage() {
  return (
    <div>
            <Navbar type={"reviewer"}/>

      <AddSlot/>
    </div>
  )
}

export default ReviewerHomePage
