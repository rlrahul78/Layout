import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex h-full bg-gray-900 text-white">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
