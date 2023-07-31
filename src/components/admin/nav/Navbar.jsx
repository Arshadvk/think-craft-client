import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

function Navbar() {
  
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [searchTerm, setSearchTerm] = useState("");

  
  const handleLogout = () => {
   
    navigate("/admin/login");
  };
  return (
    
     <nav className="bg-[#f18b31] py-4 px-8">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold text-shadow">Think Craft</div>
        <div className="flex">
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
              className="py-2 pl-10 pr-4 rounded-lg bg-[#5e310a] text-white focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Search"
            />
          </div>
          <button onClick={handleLogout} 
           className="text-white font-bold px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Logout
          </button>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar
