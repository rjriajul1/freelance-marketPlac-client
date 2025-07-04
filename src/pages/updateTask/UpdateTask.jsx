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
    fetch(
      `https://freelance-task-marketplace-server-omega.vercel.app/myPosted/${task.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    )
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
    <div className="max-w-7xl mx-auto  rounded-2xl p-6 my-4">
      <Helmet>
        <title>freelance MarketPlace || Update {task._id}</title>
      </Helmet>
      <div className="text-center my-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          ✏️ Update Your Task
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Make changes to your task details, adjust the budget, or refine the
          description to attract the right freelancers.
        </p>
      </div>

      <form onSubmit={handleUpdateForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            {/* title */}
            <label className="label text-xl font-bold">title</label>
            <input
              type="text"
              defaultValue={task.title}
              name="title"
              className=" p-2 border w-full"
              placeholder="title"
            />
          </fieldset>

          <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
            {/* category */}
            <label className="label text-xl font-bold">category</label>
            <select
              defaultValue={task.skill}
              className="p-2 font-bold w-full border  border-gray-300 rounded-md  "
              name="skill"
              id="jobs"
            >
              <option value="web development">Web Development</option>
              <option value="design">Design</option>
              <option value="Writing">Writing</option>
              <option value="marketing">Marketing</option>
            </select>
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            {/* description */}
            <label className="label text-xl font-bold">description</label>
            <input
              type="text"
              defaultValue={task.description}
              name="description"
              className="p-2 border w-full"
              placeholder="description"
            />
          </fieldset>

          <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
            {/* deadline */}
            <label className="label text-xl font-bold">deadline</label>

            <div className="w-full border border-gray-300 p-1 rounded-md ">
              <DatePicker
                name="date"
                className="w-full"
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                defaultValue={task.date}
              />
            </div>
          </fieldset>

          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            {/* budget */}
            <label className="label text-xl font-bold">budget</label>
            <input
              type="number"
              name="budget"
              defaultValue={task.budget}
              className="p-2 border  w-full"
              placeholder="budget"
            />
          </fieldset>

          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            {/* email */}
            <label className="label text-xl font-bold">email</label>
            <input
              type="email"
              name="email"
              value={task.email}
              className="p-2 border  w-full"
              placeholder="email"
            />
          </fieldset>

          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            {/* name */}
            <label className="label text-xl font-bold">name</label>
            <input
              type="text"
              name="name"
              value={task.name}
              className="p-2 border w-full"
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
