import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/nav/Navbar";
import DomainCard from "../../components/admin/TaskCard";
import { fetchDomainAdmin } from "../../services/admin/task";
import { useErrorHandler } from "../../hooks/ErrorHandler";
import { useNavigate } from "react-router-dom";

function AdminTaskList() {
  const [domains, setDomains] = useState([]);
  const { adminAutheticationHandler } = useErrorHandler();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDomainAdminHelper();
  }, []);

  const fetchDomainAdminHelper = async () => {
    try {
      const data = await fetchDomainAdmin();
      console.log(data);
      setDomains(data);
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 401) {
        adminAutheticationHandler(error);
      }
    }
  };

  const handleClickDomainCard = (id) => {
    navigate(`/admin/week-list/${id}`);
  };
  return (
    <div>
      <Navbar type={"admin"} />
      <div className="lg:ml-64 mt-10">
        <section className="bg-gray-50 min-h-screen  items-center justify-center ">
          <DomainCard data={domains} handleClick={handleClickDomainCard} type={"domain"} />
        </section>
      </div>
    </div>
  );
}

export default AdminTaskList;
