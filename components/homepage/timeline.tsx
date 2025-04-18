import React from "react";
import Counter from "../Counter";

export default function HomepageTimeline() {
  return (
    <div className="counter-timeline-area">
      <div className="container">
        <div className="counter-timeline-wrap">
          <div className="row no-gap justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div
                className="counter-timeline-item counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-review" />
                </div>
                <span className="dots">
                  <img
                    src="assets/images/shapes/counter-dots.png"
                    alt="Shape"
                  />
                </span>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={2}
                  >
                    <Counter end={2} />
                  </span>
                  <span className="counter-title">Years of Research</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="counter-timeline-item counter-text-wrap"
                data-aos="fade-down"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={5}
                  >
                    <Counter end={5} />
                  </span>
                  <span className="counter-title">Years of Development</span>
                </div>
                <span className="dots">
                  <img
                    src="assets/images/shapes/counter-dots.png"
                    alt="Shape"
                  />
                </span>
                <div className="icon">
                  <i className="flaticon-layers-1" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="counter-timeline-item counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-online-registration" />
                </div>
                <span className="dots">
                  <img
                    src="assets/images/shapes/counter-dots.png"
                    alt="Shape"
                  />
                </span>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={10}
                  >
                    <Counter end={7} />
                  </span>
                  <span className="counter-title">Years of Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
