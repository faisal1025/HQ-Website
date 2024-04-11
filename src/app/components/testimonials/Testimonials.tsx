import React from "react";

import Slider from "./TestimonialsSlider";
import TestimonialCard from "./TestimonialsCard";
import testmonialData from "./testimonialsData.json";

const Testimonials = () => {
  return (
    <div className="testimonials max-md:my-[-70%]">
    <main
      className={`flex  flex-col items-center justify-between py-2`}
    >
    <h2 className="text-[32px] font-bold mt-3 tracking-tight max-md:text-md">Client Testimonials</h2>
      <div className="w-screen">
        <Slider>
          {testmonialData.map((testimonial, i) => (
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
    </div>
  );
};

export default Testimonials;
