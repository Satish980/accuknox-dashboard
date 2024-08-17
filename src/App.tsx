// src/App.tsx
import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <Dashboard />
    </div>
  );
};

export default App;
