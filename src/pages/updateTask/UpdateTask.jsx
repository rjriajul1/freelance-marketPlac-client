import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const task = useLoaderData();
 
  const [startDate, setStartDate] = useState(new Date());

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDate = new FormData(form);
    const updateData = Object.fromEntries(formDate.entries());

    // update task form db
    fetch(`https://freelance-task-marketplace-server-omega.vercel.app/myPosted/${task.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your task update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto bg-amber-100 rounded-2xl p-6 my-4">
      <Helmet>
        <title>freelance MarketPlace || Update {task._id}</title>
      </Helmet>
      <h1 className="text-center font-bold text-2xl my-4">Update Task</h1>
      <form onSubmit={handleUpdateForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* title */}
            <label className="label text-xl font-bold">title</label>
            <input
              type="text"
              defaultValue={task.title}
              name="title"
              className="input w-full"
              placeholder="title"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* category */}
            <label className="label text-xl font-bold">category</label>
            <select
              className="p-2 font-bold w-full border border-gray-300 rounded-md  "
              name="skill"
              id="jobs"
            >
              <option value="web development">Web Development</option>
              <option value="design">Design</option>
              <option value="Writing">Writing</option>
              <option value="marketing">Marketing</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* description */}
            <label className="label text-xl font-bold">description</label>
            <input
              type="text"
              defaultValue={task.description}
              name="description"
              className="input w-full"
              placeholder="description"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* deadline */}
            <label className="label text-xl font-bold">deadline</label>

            <div className="w-full border border-gray-300 p-1 rounded-md ">
              <DatePicker
                name="date"
                className="w-full"
                defaultValue={task.date}
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* budget */}
            <label className="label text-xl font-bold">budget</label>
            <input
              type="number"
              name="budget"
              defaultValue={task.budget}
              className="input w-full"
              placeholder="budget"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* email */}
            <label className="label text-xl font-bold">email</label>
            <input
              type="email"
              name="email"
              value={task.email}
              className="input w-full"
              placeholder="email"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* name */}
            <label className="label text-xl font-bold">name</label>
            <input
              type="text"
              name="name"
              value={task.name}
              className="input w-full"
              placeholder="name"
            />
          </fieldset>
        </div>
        <button type="submit" className="btn w-full my-6 text-xl font-bold">
          add Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
