// src/Header.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEllipsisV,
  faPlus,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
interface HeaderProps {
  onAddCategoryClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddCategoryClick }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-sm">
      <h1 className="text-2xl font-semibold">CNAPP Dashboard</h1>
      <div className="flex gap-2">
        <div className="flex flex-row bg-white text-gray px-4 py-2 rounded justify-between gap-2 cursor-pointer" onClick={onAddCategoryClick}>
          <div className="font-normal">Add Widget</div>
          <div className="font-semibold">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="bg-white text-gray font-semibold px-4 py-2 rounded cursor-not-allowed">
          <FontAwesomeIcon icon={faRefresh} />
        </div>
        <div className="bg-white text-gray font-semibold px-4 py-2 rounded cursor-not-allowed">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="bg-white text-gray font-semibold px-4 py-2 rounded cursor-not-allowed gap-1 flex items-center">
          <FontAwesomeIcon icon={faClock} />
          <p>|</p>
          <select name="date-filter" id="time" className="border-none" disabled>
            <option value="last_2_days">Last 2 Days</option>
            <option value="last_week">Last Week</option>
            <option value="last_month">Last Month</option>
            <option value="last_year">Last Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
