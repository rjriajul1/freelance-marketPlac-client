import React from "react";

const Serve = ({ serve }) => {
  return (
    <div>
      <section className="my-6">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-200">
          <h3 className="text-xl font-semibold text-gray-900">{serve.title}</h3>
          <p className="text-gray-600 text-sm mt-1 mb-2">{serve.category}</p>
          <p className="text-gray-700 mb-3">{serve.description}</p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Freelancer:</strong> {serve.freelancer}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-yellow-500 font-medium">
              ⭐ {serve.rating}
            </span>
            <span className="text-green-600 font-bold">{serve.price}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serve;
