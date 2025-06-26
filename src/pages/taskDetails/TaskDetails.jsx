import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaUser,
  FaMoneyBillWave,
  FaClipboardList,
  FaCalendarAlt,
  FaHeart,
  FaTag,
} from "react-icons/fa";

const TaskDetails = () => {
  const initialTask = useLoaderData();
  const [task, setTask] = useState(initialTask);
  const { title, name, email, description, skill, date, budget, bids } =
    task || {};

  const handleBids = (email) => {
    const updatedBids = (task?.bids || 0) + 1;
    setTask((prev) => ({ ...prev, bids: updatedBids }));

    fetch(
      `https://freelance-task-marketplace-server-omega.vercel.app/tasks/${email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ bids: updatedBids }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast("update bids successfully");
        }
      });
  };

  return (
    <div>
      <p className="text-center mt-6 mb-10">
        You bid for {bids || 0} opportunities
      </p>
      <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md border rounded-xl space-y-4">
        {/* Title & Like */}
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <button className="btn btn-ghost text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base">{description}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaUser className="text-primary" />
            Posted By: <span className="font-semibold">{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            Email: <span className="font-semibold">{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-primary" />
            Budget: <span className="font-semibold">৳{budget}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClipboardList className="text-primary" />
            Total Bids: <span className="font-semibold">{bids}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-primary" />
            Posted On: <span className="font-semibold">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTag className="text-primary" />
            Skill Required:{" "}
            <span className="font-semibold capitalize">{skill}</span>
          </div>
        </div>

        {/* Call to Action (optional) */}
        <div className="pt-4">
          <button
            onClick={() => handleBids(email)}
            className="btn btn-primary btn-sm"
          >
            <AiOutlineLike size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
