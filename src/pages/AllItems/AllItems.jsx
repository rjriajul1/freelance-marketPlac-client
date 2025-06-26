import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";
import Task from "../../components/task/Task";

const AllItems = () => {
  const allTasks = useLoaderData();

  return (
    <div className="py-6">
      <div className="text-center my-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Browse All Tasks
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Discover a variety of freelance tasks posted by clients around the
          world. Find your next opportunity and start working today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {allTasks.map((task) => (
          <Task key={task._id} task={task}></Task>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
