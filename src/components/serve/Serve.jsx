import React from "react";
import { FaStar } from 'react-icons/fa';

const Serve = ({ serve }) => {
  const { title, freelancer, rating, price, description, category } = serve;
  return (
    <div className="card bg-base-100 border shadow-md rounded-xl p-5 hover:shadow-xl transition-all duration-300">
      <div className="card-body space-y-2">
        <span className="badge badge-primary w-fit mb-2 capitalize">
          {category}
        </span>

        <h2 className="text-xl font-bold text-primary">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="text-sm text-gray-500">
              By:{" "}
              <span className="font-semibold text-gray-700">{freelancer}</span>
            </p>
            <div className="flex items-center text-yellow-400 text-sm gap-1">
              <FaStar />
              <span>{rating}</span>
            </div>
          </div>
          <p className="text-lg font-bold text-primary">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Serve;
