import React, { useEffect, useState } from "react";
import { fetchDomains, searchUserDetails } from "../../services/admin/user";

function SearchBar({ user, setUserDate }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetchDomainsHelper();
  }, []);
  const fetchDomainsHelper = async () => {
    const data = await fetchDomains();
    setCategory(data);
  };
  const handleCategoryChange = (event) => {
    const query = `?domain=${event}`;
    fetchUserDataHelper(query);
    setSelectedCategory(event);
  };
  const handleSearchOnChange = (event) => {
    console.log(event);
    const query = `?search=${event}`;
    fetchUserDataHelper(query);
  };
  const fetchUserDataHelper = async (value) => {
    const data = await searchUserDetails(user, value);
    setUserDate(data);
  };
  return (
    <form>
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <select
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        >
          {user === "student" &&
            category?.map((obj) => {
              return <option value={obj?._id}>{obj?.name}</option>;
            })}
        </select>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            onChange={(e) => handleSearchOnChange(e.target.value)}
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search name..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
