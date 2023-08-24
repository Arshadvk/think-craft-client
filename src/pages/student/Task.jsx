import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import UploadTask from '../../components/student/UploadTask'

function Task() {
  return (
    <div>
      <Navbar type={''}/>
      <div className="lg:ml-64">
      <section className="bg-gray-50 min-h-screen items-center justify-center p-5 lg:px-16 pt-5  mt-14">
      <UploadTask />
      </section>
    </div>
    </div>
  )
}

export default Task
