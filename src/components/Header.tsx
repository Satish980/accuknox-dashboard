// src/Header.tsx
import React, { useState } from 'react';

interface HeaderProps {
  onAddCategoryClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddCategoryClick }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-sm">
      <h1 className="text-2xl font-semibold">CNAPP Dashboard</h1>
      <button
        onClick={onAddCategoryClick}
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Add Widget
      </button>
    </div>
  );
};

export default Header;
