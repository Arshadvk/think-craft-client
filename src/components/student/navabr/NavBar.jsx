import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StudentLogut } from "../../../redux/student/studentAuth";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const student = useSelector((state) => state.Student.Token);
  const handleLogout = () => {
    dispatch(StudentLogut());
    navigate("/login");
  };
  return (
    <div className="">
      {/* Navbar */}
      <nav className="bg-[#7c8087] text-white p-3 fixed w-full top-0 ">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-sm font-bold text-shadow px-4">Think Craft</h1>

          <div className="flex items-center">
            <div className="relative mr-4">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M8 15h10M16 9H6"
                  ></path>
                </svg>
              </span>
              <input
                className="py-2 pl-10 pr-4 rounded-lg bg-[#434549] text-white focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              className="ml-2 px-3 py-3 bg-red-600 hover:bg-red-700 rounded-lg"
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

            <button
              className="ml-2 px-3 py-3 bg-gray-700 lg:hidden rounded-lg"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div
          className={`fixed top-16 left-0 w-64 bg-[#434549] text-white p-8 h-full ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="mt-4">
            <li className="py-2">Home</li>
            <li className="py-2">Review List</li>
            <li className="py-2">Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
