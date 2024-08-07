import React from 'react';
import { FiHome, FiSettings, FiBell, FiMail } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-800 p-5">
      <div className="text-2xl font-bold mb-10">Dashboard</div>
      <nav>
        <ul>
          <li className="mb-5 flex items-center">
            <FiHome className="mr-3" /> Home
          </li>
          <li className="mb-5 flex items-center">
            <FiBell className="mr-3" /> Notifications
          </li>
          <li className="mb-5 flex items-center">
            <FiMail className="mr-3" /> Messages
          </li>
          <li className="mb-5 flex items-center">
            <FiSettings className="mr-3" /> Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
