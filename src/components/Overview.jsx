import React from 'react';

const Overview = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="p-5 bg-gray-800 rounded-lg">
        <h3 className="text-xl mb-3">Total Orders</h3>
        <p className="text-3xl">75</p>
      </div>
      <div className="p-5 bg-gray-800 rounded-lg">
        <h3 className="text-xl mb-3">Total Delivered</h3>
        <p className="text-3xl">70</p>
      </div>
      <div className="p-5 bg-gray-800 rounded-lg">
        <h3 className="text-xl mb-3">Total Cancelled</h3>
        <p className="text-3xl">5</p>
      </div>
      <div className="p-5 bg-gray-800 rounded-lg">
        <h3 className="text-xl mb-3">Net Profit</h3>
        <p className="text-3xl">$6759.25</p>
      </div>
    </div>
  );
};

export default Overview;
