import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import AddSlot from '../../components/reviewer/AddSlot'


function ReviewerHomePage() {
  return (
    <div>
       <Navbar type={"reviewer"}/>

      <AddSlot/>
    </div>
  )
}

export default ReviewerHomePage
