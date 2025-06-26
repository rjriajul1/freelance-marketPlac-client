import React from "react";

import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUserTie,
  FaClipboardList,
} from "react-icons/fa";
import { Link } from "react-router";
const Task = ({ task }) => {
  const { title, description, date, budget, skill, bids } = task || {};
  return (
    <div className="card bg-base-100 shadow-md border hover:shadow-xl transition-all duration-300">
      <div className="card-body space-y-2">
        <h2 className="card-title text-xl font-bold text-primary">{title}</h2>
        <p className="text-sm text-gray-600">{description?.slice(0, 80)}...</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
          <span className="flex items-center gap-2">
            <FaUserTie className="text-primary" />
            Skill: <span className="font-semibold text-gray-700">{skill}</span>
          </span>
          <span className="flex items-center gap-2">
            <FaMoneyBillWave className="text-primary" />
            Budget:{" "}
            <span className="font-semibold text-gray-700">৳{budget}</span>
          </span>
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-primary" />
            Posted: <span className="font-semibold text-gray-700">{date}</span>
          </span>
          <span className="flex items-center gap-2">
            <FaClipboardList className="text-primary" />
            Bids: <span className="font-semibold text-gray-700">{bids}</span>
          </span>
        </div>

        <div className="card-actions justify-end pt-4">
          <Link to={`/taskDetails/${task._id}`}>
            <button className="btn btn-outline btn-primary btn-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
