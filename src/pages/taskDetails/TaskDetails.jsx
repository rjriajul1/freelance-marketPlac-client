import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineLike } from "react-icons/ai";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const TaskDetails = () => {
  const task = useLoaderData();
  const {title,name,email,description,skill,date,budget,_id} = task || {}
 
  const [bids,setBids] = useState(0)

  const handleBids = (email) => {
   
    const newBids = bids + 1;
    setBids(newBids)
    
       fetch(`https://freelance-task-marketplace-server-omega.vercel.app/tasks/${email}`,{
         method: 'PATCH',
         headers: {
          'content-type': 'application/json'
         },
         body:JSON.stringify({bids:newBids})
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.modifiedCount){
        toast('update bids successfully')
        }
       
       })
  }

  return (
    <div className="mt-3">
      <p className="text-center  mb-10">You bid for {bids} opportunities</p>
      <div className="card border-2  border-red-500 mx-auto  w-11/12  md:w-3/6">
      <Helmet>
        <title>freelance MarketPlace || TaskDetails {task._id}</title>
      </Helmet>
        <div className=" browse-task card-body ">
            <h1 className="text-xl font-bold">{name}</h1>
          <h2 className="card-title">{title}</h2>
          <p className="font-bold">{date}</p>
          <p className="font-bold">
           {description}
          </p>
          <div className="flex">
            <p className="font-bold ">{budget} taka</p>
            <p className="font-bold ">{skill}</p>
          </div>
          <div className="flex">
             <p className="font-bold text-[16px]">mailto: <span>{email}</span></p>
           <button onClick={()=>handleBids(email)} className="btn"><AiOutlineLike size={24} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
