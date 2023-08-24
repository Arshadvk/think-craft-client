import React from "react";
import { useNavigate } from "react-router-dom";

function ReviewerSideBar() {
  const navigate = useNavigate();
  return (
    <>
      <li>
        <a
          href="#"
          class="flex items-center p-2 text-bg[#] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          onClick={() => navigate("/reviewer/slots-list")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-clock-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          </svg>
          <span class="flex-1 ml-3 whitespace-nowrap">Slots</span>
        </a>
      </li>
    </>
  );
}

export default ReviewerSideBar;
