import React from "react";

const Story = ({ story }) => {
  
  return (
    <div>
      <section className="success-card">
            <div className="h-72 p-6 rounded-2xl border">
              <p className="text-sm mb-1">
                Project: <strong>{story.project}</strong>
              </p>
              <p className="italic  mb-4">“{story.quote}”</p>
              <div className="text-sm  mb-2">
                <p>
                  <strong>Client:</strong> {story.client}
                </p>
                <p>
                  <strong>Freelancer:</strong> {story.freelancer}
                </p>
              </div>
              <p className=" text-sm">
                <strong>Result:</strong> {story.result}
              </p>
              <p className="text-yellow-500 mt-2">⭐ {story.rating}/5</p>
            </div>
      </section>
    </div>
  );
};

export default Story;
