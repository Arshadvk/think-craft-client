import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import TaskBox from '../../components/student/TaskBox'
import AdvisorCard from '../../components/student/AdvisorCard'
import studentAxios from "../../axios/studentAxios";
import WeekDetailsBox from '../../components/student/WeekDetailsBox';
function Home() { 
  const [userData, setUserData] = useState([]);
  const [reviewData , setReviewData] = useState('')
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await studentAxios.get("/home");
        console.log('profile dataa', response.data);
        setUserData(response.data?.student);
        setReviewData(response.data?.review?.reviews[0])
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar type={""} />
      <div className="lg:ml-64">
        <section className="bg-gray-50 min-h-screen pt-20 w-full">
        <div className="flex items-center justify-center mt-4">
          <TaskBox userData={userData}/>
          <WeekDetailsBox userData={userData} reviewData={reviewData}/>
          </div>
          <AdvisorCard reviewData={reviewData}/>
        </section>
      </div>
    </div>
  )
}

export default Home
