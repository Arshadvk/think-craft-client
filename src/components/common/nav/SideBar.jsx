import React from "react";
import { useNavigate } from "react-router-dom";
import AdvisorSideBar from "../../advisor/AdvisorSideBar";
import StudentSideBar from "../../student/StudentNavBar";
import AdminSideBar from "../../admin/AdminSideBar";
import ReviewerSideBar from "../../reviewer/ReviewerSideBar";

function SideBar({ data, type }) {
  const isSidebarOpen = data;
  const user = type;
  const navigate = useNavigate();

  return (
    <aside
      id="logo-sidebar"
      class={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-shadow border-gray-200  dark:bg-gray-900 dark:border-[#f18b31]} ${
        isSidebarOpen ? "block" : "hidden"
      } lg:block`}
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-bg[#] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate(user === "student" ? "/" : `/${user}`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Home</span>
            </a>
          </li>

          <li
            className={
              user === "" ? "hidden" : user === "admin" ? "hidden" : ""
            }
          >
            <a
              href="#"
              class="flex items-center p-2 text-bg[#] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate(`/${user}/reviews-list`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list-ul"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Reviews List</span>
            </a>
          </li>

          {user === "admin" ? <AdminSideBar /> : ""}
          {user === "advisor" ? <AdvisorSideBar /> : ""}
          {user === "reviewer" ? <ReviewerSideBar /> : ""}
          {user === "" ? <StudentSideBar /> : ""}

          <li className={user === "admin" ? "hidden" : ""}>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate(user ? `/${user}/profile` : `/profile`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-person-square"
                viewBox="0 0 20 18"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
