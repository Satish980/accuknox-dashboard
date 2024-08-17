// src/Navbar.tsx
import React, { useState } from "react";
import useDashboardStore from "../store";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const setSearchQuery = useDashboardStore((state) => state.setSearchQuery);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setSearchQuery(searchText);
  //   const results = searchWidgets();
  //   console.log('Search Results:', results); // Replace this with the logic to display the search results
  // };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchQuery(searchText);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-gray-600">Home &gt; Dashboard</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-start relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-gray-100 text-black-800 pl-2 p-2 rounded-lg w-72 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
