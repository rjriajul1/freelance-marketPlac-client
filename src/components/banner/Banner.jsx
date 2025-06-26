import React from "react";
import carousel1 from "../../assets/slider_1.jpg";
import carousel2 from "../../assets/slider_2.jpg";
import carousel3 from "../../assets/slider_3.jpg";
import carousel4 from "../../assets/slider_4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="mt-8">
      <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
        <div className="">
          <img className="h-[400px] lg:h-[600px] object-cover w-11/12 mx-auto rounded-2xl" src={carousel1} />
        </div>
        <div>
          <img className="h-[400px] lg:h-[600px] w-11/12 mx-auto object-cover rounded-2xl " src={carousel2} />
        </div>
        <div>
          <img className="h-[400px] lg:h-[600px] w-11/12 mx-auto object-cover rounded-2xl" src={carousel3} />
        </div>
        <div>
          <img className="h-[400px] lg:h-[600px] w-11/12 mx-auto object-cover rounded-2xl" src={carousel4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
