import React from "react";

const Promotional = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-10 px-6 rounded-xl my-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        🎉 Special Launch Offer!
      </h2>
      <p className="text-sm md:text-base mt-2 max-w-xl mx-auto">
        Join today and enjoy <span className="font-bold">0% commission</span> on
        your first project. This offer is valid for a limited time only!
      </p>

      <div className="mt-6">
        <button className="btn btn-accent">Claim Offer Now</button>
      </div>
    </div>
  );
};

export default Promotional;
