import React from 'react'
import file from '../../../assets/image/files.jpg'
function TaskUploadedDetail() {
  return (
    <div className='shadow-2xl rounded flex p-5 mt-3 lg:pl-20 text-xs font-semibold'>
      <div className='lg:w-1/3 '>
        <img src={file} className='w-2/3 lg:w-1/3 shadow-2xl rounded-2xl' alt="" />
        <h1 className='mt-2'>Personal Workout</h1>
      </div>
      <div className='lg:w-1/3'>
      <img src={file}  className='w-2/3 lg:w-1/3 shadow-2xl rounded-2xl' alt="" />
      <h1 className='mt-2'>Technical Workout</h1>
      </div>
      <div className='lg:w-1/3'>
      <img src={file} className='w-2/3 lg:w-1/3 shadow-2xl rounded-2xl' alt="" />
      <h1 className='mt-2'>Miscellaneous Workout</h1>
      </div>
    </div>
  )
}

export default TaskUploadedDetail
