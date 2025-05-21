import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { BiDialpad } from "react-icons/bi";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyPostedTasks = () => {
  const [posts, setPosts] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`https://freelance-task-marketplace-server-omega.vercel.app/myPosted/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [user]);

  const handleDeleteDB = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://freelance-task-marketplace-server-omega.vercel.app/myPosted/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.deletedCount) {
          const remaingTask = posts.filter((task) => task._id !== id);
          setPosts(remaingTask);
          Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
        }
      });
        
      }
    });
    
  };

  return (
    <div>
      <Helmet>
        <title>freelance MarketPlace || My Posted Tasks</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center my-6">
        My posted Tasks: {posts.length}
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-xl">
              <tr className="">
                <th>No</th>
                <th>Category</th>
                <th>title</th>
                <th>date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {posts.map((post, index) => (
                <tr key={post._id}>
                  <th>{index + 1}</th>
                  <td className="font-bold text-[16px]">{post.skill}</td>
                  <td className="font-bold text-[16px]">{post.title}</td>
                  <td className="font-bold text-[16px]">{post.date}</td>
                  <td>
                    <div className="join join-vertical lg:join-horizontal">
                      <button className="btn join-item">
                        <BiDialpad size={24} />
                      </button>
                      <Link to={`/updateTask/${post._id}`}>
                        <button className="btn join-item">
                          <MdEdit size={24} />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteDB(post._id)}
                        className="btn join-item"
                      >
                        <MdDelete size={24} color="red" />
                      </button>
                    </div>
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

export default MyPostedTasks;
