import React, { useEffect, useState } from "react";
import Story from "../story/Story";

const SuccessStory = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("/stories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div id="success" className=" mt-2">
      <div className=" py-6">
        <div className="text-center my-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            🌟 Success Stories
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
            Real results from real people. Discover how our freelancers and
            clients work together to achieve amazing outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
          {stories?.map((story) => (
            <Story key={story.id} story={story}></Story>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
