import React from 'react';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      rating: 5,
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
      name: 'Dianne Russell',
      rating: 5,
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    },
    {
      name: 'Devon Lane',
      rating: 4,
      feedback: 'Normally are wings, but theirs are lean meaty and tender, and not a bad price at all.',
    },
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="w-full bg-gray-800 p-5 rounded-lg">
      <h3 className="text-xl mb-3">Customer's Feedback</h3>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index} className="mb-5">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                {feedback.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold">{feedback.name}</p>
                <p className="text-yellow-500">{renderStars(feedback.rating)}</p>
              </div>
            </div>
            <p className="text-gray-400">{feedback.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerFeedback;
