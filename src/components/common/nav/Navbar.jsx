import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { AdminLogout } from "../../../redux/admin/adminAuth";
import { StudentLogut } from "../../../redux/student/studentAuth";
import { ReviewerLogout } from "../../../redux/reviewer/reviewerAuth";
import { AdvisorLogout } from "../../../redux/advisor/advisorAuth";
import profilePic from "../../../assets/image/profile.jpg";
import Swal from "sweetalert2";

function Navbar({ type }) {
  let user = type;
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (user === "admin") {
          dispatch(AdminLogout());
          localStorage.removeItem("admin");
        } else if (user === "advisor") {
          dispatch(AdvisorLogout());
          localStorage.removeItem("advisor");
        } else if (user === "reviewer") {
          dispatch(ReviewerLogout());
          localStorage.removeItem("reviewer");
        } else {
          dispatch(StudentLogut());
          localStorage.removeItem("student");
        }

        if (user === "") navigate("/login");
        else navigate(`/${user}/login`);
      }
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full bg-white  border-gray-200 ${
          user === "admin"
            ? "dark:bg-[#134140]"
            : user === "advisor"
            ? "dark:bg-[#154a6c]"
            : user === "reviewer"
            ? "dark:bg-gray-800"
            : "dark:bg-black"
        }`}
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-white text-shadow px-4">
                Think Craft
              </h1>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className={user === "admin" ? "hidden" : ""}>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(user === "" ? `/profile` : `/${user}/profile`)
                    }
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={profilePic}
                      alt="user photo"
                    />
                  </button>
                </div>
                <button
                  className="ml-2 px-3 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white"
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </button>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <SideBar data={isSidebarOpen} type={user} />
    </>
  );
}

export default Navbar;
