import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Task = ({ task }) => {

  const { title, description, date,budget,skill } = task || {};
  return (
    <div>
      <div className="card border bg-base-100 my-10 h-62">
        <div className="card-body">
          <div className="mb-2 space-y-3">
            <h2 className="card-title text-red-500">{title}</h2>
            <p className="text-gray-500 font-bold">{date}</p>
          </div>
          <div className="flex">
            <p className="font-bold text-gray-500">{budget} taka</p>
            <p className="font-bold text-gray-500">{skill}</p>
          </div>
          <p className="font-bold text-green-500">
            <Typewriter 
            words={[`${description}`]}
             loop={0}
            typeSpeed={90}
            delaySpeed={30}
            /></p>
        
        </div>
      </div>
    </div>
  );
};

export default Task;
