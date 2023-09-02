import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/nav/Navbar";
import TaskCard from "../../components/admin/TaskCard";
import { useErrorHandler } from "../../hooks/ErrorHandler";
import { fetchTasksByDomain } from "../../services/admin/task";
import { useNavigate, useParams } from "react-router-dom";

function AdminWeekListing() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [tasks, setTasks] = useState([]);
  const { adminAutheticationHandler } = useErrorHandler();

  useEffect(() => {
    fetchTaskByDomainHelper(id);
  }, []);

  const fetchTaskByDomainHelper = async (id) => {
    try {
      const data = await fetchTasksByDomain(id);
      console.log(data);
      setTasks(data[0].tasks)
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 401) {
        adminAutheticationHandler(error);
      }
    }
  };

  const handleClickTaskCard = (id) =>{
    navigate(`/admin/task-details/${id}`)
  }
  return (
    <div>
      <Navbar type={"admin"} />
      <div className="lg:ml-64 mt-10">
        <section className="bg-gray-50 min-h-screen  items-center justify-center ">
          <TaskCard data={tasks} handleClick={handleClickTaskCard} type={"week"}/>
        </section>
      </div>
    </div>
  );
}

export default AdminWeekListing;
