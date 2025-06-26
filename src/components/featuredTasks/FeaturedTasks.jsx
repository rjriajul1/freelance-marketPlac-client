import React from "react";
import Task from "../task/Task";

const FeaturedTasks = ({ tasksData }) => {
  return (
    <div>
      <div className=" py-6">
        <div className="text-center my-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            🔥 Featured Tasks
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
            Handpicked freelance tasks from top clients. Get noticed, get hired,
            and grow your portfolio with high-value opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
          {tasksData.map((task) => (
            <Task key={task._id} task={task}></Task>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTasks;
