import React from 'react';

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  const statusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-500';
      case 'Cancelled':
        return 'text-red-500';
      case 'Pending':
        return 'text-yellow-500';
      default:
        return '';
    }
  };

  return (
    <div className="w-full bg-gray-800 p-5 rounded-lg">
      <h3 className="text-xl mb-3">Recent Orders</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th className="pb-3">Customer</th>
            <th className="pb-3">Order No.</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-2">{order.customer}</td>
              <td className="py-2">{order.orderNo}</td>
              <td className="py-2">{order.amount}</td>
              <td className={`py-2 ${statusColor(order.status)}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
