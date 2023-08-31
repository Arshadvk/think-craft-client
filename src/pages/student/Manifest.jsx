import React from "react";
import Navbar from "../../components/common/nav/Navbar";
import WeeklyFolderCard from "../../components/student/WeeklyFolderCard";

function Manifest() {
  return (
    <div>
      <Navbar type={""} />
      <div className="lg:ml-64 mt-10">
        <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
          <WeeklyFolderCard/>
        </section>
      </div>
    </div>
  );
}

export default Manifest;
