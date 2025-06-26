import React from "react";

const Blog = () => {
  return (
    <div id="blog" className="my-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        📚 From Our Blog
      </h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">
        Stay updated with expert tips, success stories, and the latest trends in
        freelancing and remote work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {/* Blog Card 1 */}
        <div className="card bg-base-100 shadow-md border p-4 text-left">
          <h3 className="text-xl font-semibold text-primary">
            How to Win More Freelance Projects
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Discover strategies to stand out, write winning proposals, and grow
            your freelance business.
          </p>
          <div className="mt-4">
            <button className="btn btn-link text-primary px-0">
              Read More →
            </button>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="card bg-base-100 shadow-md border p-4 text-left">
          <h3 className="text-xl font-semibold text-primary">
            Top 5 Skills Clients Look for in 2025
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            From AI to design — see what clients are prioritizing when hiring
            freelancers this year.
          </p>
          <div className="mt-4">
            <button className="btn btn-link text-primary px-0">
              Read More →
            </button>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="card bg-base-100 shadow-md border p-4 text-left">
          <h3 className="text-xl font-semibold text-primary">
            Freelancer vs Full-time: What's Right for You?
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Explore the pros and cons of freelancing compared to a full-time
            career, and decide your path.
          </p>
          <div className="mt-4">
            <button className="btn btn-link text-primary px-0">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
