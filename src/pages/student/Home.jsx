import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/nav/Navbar";
import TaskBox from "../../components/student/TaskBox";
import AdvisorCard from "../../components/student/AdvisorCard";
import studentAxios from "../../axios/studentAxios";
import WeekDetailsBox from "../../components/student/WeekDetailsBox";
import home from "../../assets/image/student/na_feb_36.jpg";
import Calendar from "../../components/student/Calender";
import { useErrorHandler } from "../../hooks/ErrorHandler";

function Home() {
  const [userData, setUserData] = useState([]);
  const [reviewData, setReviewData] = useState("");
  const { studentAuthenticationHandler } = useErrorHandler();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await studentAxios.get("/home");
        setUserData(response.data?.student);
        setReviewData(response.data);
      } catch (error) {
        studentAuthenticationHandler(error.response);
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar type={""} />
      <div className="lg:ml-64">
        <section className="min-h-screen pt-14 w-full">
          <div
            className="bg-white  h-52 lg:h-96 "
            style={{
              backgroundImage: `url(${home})`,
              backgroundSize: "cover", // This will make the background image cover the entire div
              backgroundRepeat: "no-repeat", // This will prevent the background image from repeating
            }}
          >
            <div className="flex justify-end mt-2">
              <div>
                <WeekDetailsBox userData={userData} reviewData={reviewData} />
                <Calendar />
              </div>
            </div>
          </div>
          <br />
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TaskBox userData={userData} />
            <AdvisorCard reviewData={reviewData} student={userData} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
