import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { BiDialpad } from "react-icons/bi";
import { Link } from "react-router";

const MyPostedTasks = () => {
  const [posts, setPosts] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/myPosted/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">
        My posted Tasks: {posts.length}
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-xl">
              <tr>
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
                      <button className="btn join-item"><BiDialpad size={24}/></button>
                      <Link to={`/updateTask/${post._id}`}><button className="btn join-item"><MdEdit size={24}/></button></Link>
                      <button className="btn join-item"><MdDelete size={24} color="red"/></button>
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
