import React from "react";
import { Link, Links } from "react-router";

const CallToAction = () => {
  return (
    <div className="bg-base-200 py-12 px-4 rounded-xl text-center my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        Ready to Get Started?
      </h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
        Whether you're a freelancer looking to grow your career or a client
        searching for talent, we make it easy to connect and get things done.
      </p>
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
       <Link to="/login"> <button className="btn btn-primary">Join as Freelancer</button></Link>

       <Link to="/login"> <button className="btn btn-outline btn-primary">Post a Task</button></Link>
      </div>
    </div>
  );
};

export default CallToAction;
