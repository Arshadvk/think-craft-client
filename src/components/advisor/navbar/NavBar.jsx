import React , { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {AdvisorLogout} from '../../../redux/advisor/advisorAuth'

function NavBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const advisor = useSelector((state)=>state.Advisor.Token)
    const handleLogout = ()=>{
        dispatch(AdvisorLogout())
        navigate('/advisor/login')
    }
  return (
    <div className="min-h-screen bg-gray-100">
    {/* Navbar */}
    <nav className="bg-[#154a6c] text-white p-3 fixed w-full top-0 ">
      <div className="container mx-auto flex justify-between items-center">
     
        <h1 className="text-xl font-bold text-shadow px-4">Think Craft</h1>
   
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
        
          <button
            className="ml-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
       
          <button
            className="ml-2 px-3 py-2 bg-gray-700 lg:hidden rounded-lg"
            onClick={toggleSidebar}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>

  
    <div className="flex">
      <div
        className={`fixed top-16 left-0 w-64 bg-[#3c769a] text-white p-8 h-full ${
          isSidebarOpen ? 'block' : 'hidden'
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
    
  )
}

export default NavBar
