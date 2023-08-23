import React, { useEffect } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import TaskBox from '../../components/student/TaskBox'
import AdvisorCard from '../../components/student/AdvisorCard'




function Home() { 

  return (
    <div>
      <Navbar type={""} />
      <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen pt-20 w-full">
          <TaskBox />
          <AdvisorCard />
        </section>
      </div>
    </div>
  )
}

export default Home
