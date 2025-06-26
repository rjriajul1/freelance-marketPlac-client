import React from "react";
import { Typewriter} from "react-simple-typewriter";

const Serve = ({ serve }) => {
  // const [text] = useTypewriter({
  //   words:[`${serve.description}`],
  //   loop:10,
    
  // })
  return (
    <div className="">
      <section className="my-6">
        <div className=" p-6 rounded-2xl shadow-sm border hover:shadow-md transition duration-200 h-52">
          <h3 className="text-xl font-semibold ">{serve.title}</h3>
          <p className="text-sm mt-1 mb-2">{serve.category}</p>
          <p className=" mb-3">
            <Typewriter 
            words={[`${serve.description}`]}
            loop={0}
            typeSpeed={90}
            delaySpeed={30}
            /></p>
          <p className="text-sm mb-1">
            <strong>Freelancer:</strong> {serve.freelancer}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-yellow-500 font-medium">
              ⭐ {serve.rating}
            </span>
            <span className="font-bold">{serve.price}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serve;
