import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative">
        <input
          type="text"
          className="border rounded-lg py-2 px-4 focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="Search..."
        />
        <svg
          className="h-5 w-5 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 19l-6.799-6.8M8 15a7 7 0 100-14 7 7 0 000 14z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
