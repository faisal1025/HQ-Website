import React from "react";

import Slider from "./TestimonialsSlider";
import TestimonialCard from "./TestimonialsCard";
import testmonialData from "./testimonialsData.json";

const Testimonials = () => {
  return (
    <div className="testimonials">
    <main
      className={`flex  flex-col items-center justify-between py-2`}
    >
    <h2 className="text-[32px] font-bold mt-3 tracking-tight max-md:text-md">Client Testimonials</h2>
      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testmonialData.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
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
