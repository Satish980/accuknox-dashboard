// src/Navbar.tsx
import React, { useState } from "react";
import { connect } from "redux-bundler-react";
import {
  faBell,
  faGreaterThan,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar: React.FC = ({ doSearchWidget }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("=====", searchText)
      doSearchWidget(searchText);
    }
  };

  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2 font-semibold">
          <div className="text-gray-500 flex gap-2 items-center">
            Home
            <div>
              <FontAwesomeIcon icon={faGreaterThan} size="xs" />
            </div>
          </div>
          <div className="text-indigo-700">Dashboard V2</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-start relative gap-2">
          <div className="absolute inset-y-0 left-2 flex items-center pr-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-gray-100 pl-8 p-2 border rounded w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div>
          <FontAwesomeIcon icon={faBell} title="Notifications" />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faUserCircle}
            size="xl"
            title="User profile"
            className="text-indigo-700"
          />
        </div>
      </div>
    </nav>
  );
};

export default connect(
  "doSearchWidget",
  "selectFilteredWidgets",
  Navbar
);
