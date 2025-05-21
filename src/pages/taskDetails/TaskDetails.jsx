import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";

const TaskDetails = () => {
  const task = useLoaderData();
  const {title,name,email,description,skill,date,budget} = task || {}

  return (
    <div>
      <div className="card border mx-auto my-6 bg-base-100 w-11/12  md:w-3/6">
      <Helmet>
        <title>freelance MarketPlace || TaskDetails {task._id}</title>
      </Helmet>
        <div className="card-body">
            <h1 className="text-xl font-bold">{name}</h1>
          <h2 className="card-title text-red-500">{title}</h2>
          <p className="font-bold text-gray-500">{date}</p>
          <p className="font-bold">
           {description}
          </p>
          <div className="flex">
            <p className="font-bold text-gray-500">{budget} taka</p>
            <p className="font-bold text-gray-500">{skill}</p>
          </div>
          <p className="font-bold text-[16px]">mailto: <span>{email}</span></p>
         
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
