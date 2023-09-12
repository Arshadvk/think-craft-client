import React from 'react'
import PendingTaskBox from './PendingTaskBox'
import ReviewMarkBox from './ReviewMarkBox'
import StudentDetails from './StudentDetails'
import TaskDetails from './TaskDetails'
import TaskUploadedDetail from './TaskUploadedDetail'

function ReviewDetailsTable({student , user , id  , review }) {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
      <StudentDetails student={student} user={user} review={ review }/>
      <ReviewMarkBox user={user} student={student?._id} week={student?.week} mark={review?.mark}  review={review?.status} id={id}/>
      <PendingTaskBox user={user}  id={id} pndTask={review?.pendingTask}/>
      <TaskDetails user={user} review={review} id={id} taskStatus={review?.taskStatus} status={review?.status}/>
    </div>
    <TaskUploadedDetail/>
    </>
  )
}

export default ReviewDetailsTable
