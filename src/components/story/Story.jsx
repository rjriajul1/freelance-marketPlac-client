import React from "react";

const Story = ({ story }) => {
  console.log(story);
  return (
    <div>
      <section className="">
            <div className="bg-white h-72 p-6 rounded-2xl shadow-md">
              <p className="text-sm text-gray-500 mb-1">
                Project: <strong>{story.project}</strong>
              </p>
              <p className="italic text-gray-700 mb-4">“{story.quote}”</p>
              <div className="text-sm text-gray-600 mb-2">
                <p>
                  <strong>Client:</strong> {story.client}
                </p>
                <p>
                  <strong>Freelancer:</strong> {story.freelancer}
                </p>
              </div>
              <p className="text-green-600 text-sm">
                <strong>Result:</strong> {story.result}
              </p>
              <p className="text-yellow-500 mt-2">⭐ {story.rating}/5</p>
            </div>
      </section>
    </div>
  );
};

export default Story;
