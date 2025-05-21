import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";

const BrowseTasks = () => {
  const allTasks = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>freelance MarketPlace || Browser Tasks</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-red-500 text-center my-6">
        All Tasks Post here so at a glance
      </h1>
      <div>
        <div className="overflow-x-auto my-6">
          <table className="table table-xs">
            <thead className="text-xl">
              <tr>
                <th>No</th>
                <th>Category</th>
                <th>title</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="font-bold  ">
              {allTasks.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td className="md:text-[18px]">{task.skill}</td>
                  <td className="md:text-[18px]">{task.title}</td>
                  <td className="md:text-[18px]">{task.date}</td>
                  <td className="md:text-[18px]">
                    <Link to={`/taskDetails/${task._id}`}><button className="btn btn-xs md:btn-md">See Details</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTasks;
