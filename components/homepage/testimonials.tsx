import dynamic from "next/dynamic";
import React from "react";
const TestimonialSlider = dynamic(
  () => import("@/components/TestimonialSlider"),
  { ssr: false }
);

export default function HomepageTestimonials() {
  return (
    <section
      id="testimonials"
      className="testimonials-area pt-130 rpt-100 pb-80 rpb-50"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-11">
            <div
              className="section-title text-center mb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>1253+ Global Clients Say About Our Business Services</h2>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider />
    </section>
  );
}
