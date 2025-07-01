import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";
import Task from "../../components/task/Task";

const AllItems = () => {
  const allTasks = useLoaderData();
    const [sortOption, setSortOption] = useState("newest");

  // Helper to parse date in "DD/MM/YYYY" format
  const parseCustomDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  // Sorting logic
  const sortedTasks = [...allTasks].sort((a, b) => {
    if (sortOption === "newest") {
      return parseCustomDate(b.date) - parseCustomDate(a.date);
    } else if (sortOption === "oldest") {
      return parseCustomDate(a.date) - parseCustomDate(b.date);
    } else if (sortOption === "low-budget") {
      return parseFloat(a.budget) - parseFloat(b.budget);
    } else if (sortOption === "high-budget") {
      return parseFloat(b.budget) - parseFloat(a.budget);
    }
    return 0;
  });
  return (
     <div className="py-6">
      <Helmet>
        <title>All Tasks | FreelanceHub</title>
      </Helmet>

      {/* Page title */}
      <div className="text-center my-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Browse All Tasks
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Discover a variety of freelance tasks posted by clients around the world. Find your next opportunity and start working today.
        </p>
      </div>

      {/* Sorting dropdown */}
      <div className="max-w-xs mx-auto mb-6">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="low-budget">Budget: Low to High</option>
          <option value="high-budget">Budget: High to Low</option>
        </select>
      </div>

      {/* Task cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {sortedTasks.map((task) => (
          <Task key={task._id} task={task}></Task>
        ))}
      </div>
    </div>
    // <div className="py-6">
    //   <div className="text-center my-8">
    //     <h2 className="text-3xl md:text-4xl font-bold text-primary">
    //       Browse All Tasks
    //     </h2>
    //     <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
    //       Discover a variety of freelance tasks posted by clients around the
    //       world. Find your next opportunity and start working today.
    //     </p>
    //   </div>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
    //     {allTasks.map((task) => (
    //       <Task key={task._id} task={task}></Task>
    //     ))}
    //   </div>
    // </div>
  );
};

export default AllItems;
