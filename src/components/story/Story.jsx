import React from "react";
// SuccessStoryCard.jsx
import { FaStar, FaRegStar } from "react-icons/fa";
const Story = ({ story }) => {
  const { client, freelancer, project, quote, result, rating } = story;
  // Create star rating
  const stars = Array(5)
    .fill(0)
    .map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-300" />
      )
    );
  return (
    <div className="card bg-base-100 border shadow-lg rounded-xl p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-primary">{project}</h3>
        <p className="italic text-gray-600 border-l-4 border-primary pl-4">
          "{quote}"
        </p>

        <div className="text-sm text-gray-500">
          <p>
            <span className="font-semibold">Client:</span> {client}
          </p>
          <p>
            <span className="font-semibold">Freelancer:</span> {freelancer}
          </p>
        </div>

        <div className="text-sm bg-base-200 p-3 rounded-lg mt-2 text-gray-700">
          <span className="font-semibold">Outcome:</span> {result}
        </div>

        <div className="flex items-center gap-1 mt-3">{stars}</div>
      </div>
    </div>
  );
};

export default Story;
