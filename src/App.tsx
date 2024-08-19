// src/App.tsx
import React from 'react';
import Dashboard from './components/organism/Dashboard';
import Navbar from './components/organism/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Dashboard />
    </div>
  );
};

export default App;
