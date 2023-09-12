import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/nav/Navbar'
import TaskBox from '../../components/student/TaskBox'
import AdvisorCard from '../../components/student/AdvisorCard'
import studentAxios from "../../axios/studentAxios";
import WeekDetailsBox from '../../components/student/WeekDetailsBox';
import home from '../../assets/image/student/home.gif';
function Home() { 
  const [userData, setUserData] = useState([]);
  const [reviewData , setReviewData] = useState('')
 
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await studentAxios.get("/home");
        console.log('profile dataa', response.data);
        setUserData(response.data?.student)
        setReviewData(response.data)
        
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
        <section className="bg-gray-50 min-h-screen pt-14 w-full">
          <div
      className="bg-white mx-2 h-screen rounded-3xl shadow-md"
      style={{
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover', // This will make the background image cover the entire div
        backgroundRepeat: 'no-repeat', // This will prevent the background image from repeating
    }}
    >
        <div className="flex items-center justify-center mt-4">
          <TaskBox userData={userData}/>
          <WeekDetailsBox userData={userData} reviewData={reviewData}/>
          </div>
          <AdvisorCard reviewData={reviewData} student={userData}/>

      </div> 
        </section>
      </div>
    </div>
  )
}

export default Home
