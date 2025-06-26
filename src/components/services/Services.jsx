import React, { useEffect, useState } from "react";
import Serve from "../serve/Serve";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div id="service" className="py-6">
        <div className="text-center my-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            🌟 Top Rated Services
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
            Browse the highest-rated freelance services, trusted by clients and
            delivered with excellence. Quality work, guaranteed results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
          {service?.map((serve) => (
            <Serve key={serve.id} serve={serve}></Serve>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
