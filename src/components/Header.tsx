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
    <div className="flex justify-between items-center p-6 border-none">
      <h1 className="text-2xl font-semibold">CNAPP Dashboard</h1>
      <div className="flex gap-2">
        <div className="flex flex-row bg-white text-gray px-4 py-2 border-gray-200 border-2 rounded-md justify-between gap-2 cursor-pointer" onClick={onAddCategoryClick}>
          <div className="font-normal">Add Widget</div>
          <div className="font-semibold">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="bg-white text-gray font-semibold px-4 py-2 border-gray-200 border-2 rounded-md cursor-not-allowed opacity-50">
          <FontAwesomeIcon icon={faRefresh} />
        </div>
        <div className="bg-white text-gray font-semibold px-4 py-2 border-gray-200 border-2 rounded-md cursor-not-allowed opacity-50">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div className="bg-white text-gray text-indigo-700 font-semibold px-2 py-2 border-indigo-300 border-2 rounded-md cursor-not-allowed gap-1 flex items-center justify-start opacity-50">
          <FontAwesomeIcon icon={faClock} size="lg"/>
          <div className="ml-1 h-full w-full border-r-2 border-indigo-500"/>
          <select name="date-filter" id="time" className="border-none cursor-not-allowed" disabled>
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
