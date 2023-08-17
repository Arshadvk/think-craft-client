import React from 'react'
import Navbar from '../../components/common/nav/Navbar'
import TaskBox from '../../components/student/TaskBox'



function Home() {
  return (
    <div>
      <Navbar type={""} />
      <TaskBox />
    </div>
  )
}

export default Home
