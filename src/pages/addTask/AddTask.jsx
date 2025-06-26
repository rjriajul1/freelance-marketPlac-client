import React, { use} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddTask = () => {
  const { user } = use(AuthContext);
  // const [startDate, setStartDate] = useState(new Date());

  const handleFormAddTasks = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDate = new FormData(form);
    const taskData = Object.fromEntries(formDate.entries());
    console.log(taskData);

    // add to task db
    fetch("https://freelance-task-marketplace-server-omega.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your task post added db successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>freelance MarketPlace || Add Task</title>
      </Helmet>
      <div className="max-w-7xl mx-auto rounded-2xl p-6 my-4">
        <h1 className="text-center font-bold text-2xl my-4">Add Task</h1>
        <form onSubmit={handleFormAddTasks}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
              {/* title */}
              <label className="label text-xl font-bold">title</label>
              <input
                type="text"
                name="title"
                className=" p-2 border text-xl w-full"
                placeholder="title"
              />
            </fieldset>

            <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
              {/* category */}
              <label className="label text-xl font-bold">category</label>
              <select
                className="p-2  font-bold w-full border border-gray-300 rounded-md  "
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
                name="description"
                className="p-2 border text-xl w-full"
                placeholder="description"
              />
            </fieldset>

            <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
              {/* deadline */}
   
   
              <label className="label text-xl font-bold">deadline</label>
                <input type="date" name="date" className="p-2 border text-xl w-full" />
            </fieldset>

            <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
              {/* budget */}
              <label className="label text-xl font-bold">budget</label>
              <input
                type="number"
                name="budget"
                className="p-2 border text-xl w-full"
                placeholder="budget"
              />
            </fieldset>

            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
              {/* email */}
              <label className="label text-xl font-bold">email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                className="p-2 text-xl border w-full"
                placeholder="email"
              />
            </fieldset>

            <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
              {/* name */}
              <label className="label text-xl font-bold">name</label>
              <input
                type="text"
                name="name"
                value={user.displayName}
                className="p-2 border text-xl w-full"
                placeholder="name"
              />
            </fieldset>
          </div>
          <button type="submit" className=" btn w-full my-6 text-xl bg-primary text-white font-bold">
            add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
