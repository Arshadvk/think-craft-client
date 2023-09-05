import React from 'react'
import PendingTaskBox from './PendingTaskBox'
import ReviewMarkBox from './ReviewMarkBox'
import StudentDetails from './StudentDetails'
import TaskDetails from './TaskDetails'

function ReviewDetailsTable({student , user , id  , review}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
      <StudentDetails student={student} user={user} review={review}/>
      <ReviewMarkBox user={user} id={id} />
      <PendingTaskBox user={user}/>
      <TaskDetails user={user}/>
      
    </div>
  )
}

export default ReviewDetailsTable
