import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";

const BrowseTasks = () => {
  const allTasks = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>freelance MarketPlace || Browser Tasks</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-red-500 text-center my-6">
        All Tasks Post here so at a glance
      </h1>
      <div>
        <div className="overflow-x-auto my-6">
          <table className="table table-xs">
            <thead className="text-xl border">
              <tr className="browse-task">
                <th className="border">No</th>
                <th className="border">Category</th>
                <th className="border">title</th>
                <th className="border">Date</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody className="font-bold  ">
              {allTasks.map((task, index) => (
                <tr key={task._id}>
                  <th className="border">{index + 1}</th>
                  <td className="md:text-[18px] border">{task.skill}</td>
                  <td className="md:text-[18px] border">{task.title}</td>
                  <td className="md:text-[18px] border">{task.date}</td>
                  <td className="md:text-[18px] border">
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
