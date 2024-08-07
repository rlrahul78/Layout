import React from "react";
import Overview from "./Overview";
import Activity from "./Activity";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";

const Dashboard = () => {
  return (
    <div className="w-4/5 p-5 space-y-5">
      <Overview />
      <div className="flex space-x-5">
        <div className="w-1/2 space-y-5">
          <img src="bar_chart.jpg" style={{ height: "135px", width: '100%' }} />
          <RecentOrders />
        </div>
        <div className="w-1/2 space-y-5">
          <img src="goal.jpg" style={{ height: "135px", width: '100%' }} />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
