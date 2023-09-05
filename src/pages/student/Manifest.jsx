import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/nav/Navbar";
import WeeklyFolderCard from "../../components/student/WeeklyFolderCard";
import { fetchManifestData } from "../../services/student/manifest";
import { useErrorHandler } from "../../hooks/ErrorHandler";

function Manifest() {
  const [reviewsData , setReviewsData ] = useState([])
  const {studentAuthenticationHandler} = useErrorHandler()
  useEffect(()=>{
    fetchManifestHelper()
  },[])
  const fetchManifestHelper = async () =>{
    try {
      
      const data = await fetchManifestData()
      setReviewsData(data[0].reviews)
      console.log(data);
    } catch (error) {
      console.log(error);
      const {response : {status}} = error
      if (status === 401) {
          studentAuthenticationHandler(error)
      }
    }
  }
 
  return (
    <div>
      <Navbar type={""} />
      <div className="lg:ml-64 mt-10">
        <section className="bg-gray-50 min-h-screen  items-center justify-center ">
          <WeeklyFolderCard reviewsData={reviewsData}  />
        </section>
      </div>
    </div>
  );
}

export default Manifest;
