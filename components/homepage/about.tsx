import React from "react";

export default function HomepageAbout() {
  return (
    <section id="about" className="about-area py-90 rpy-60">
      <div className="container">
        <div className="row gap-90 align-items-center">
          <div className="col-lg-6">
            <div
              className="about-images my-40"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img src="assets/images/about/about-new.png" alt="About" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content mt-40 rmt-15"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-30">
                <h2>Our Vision: Empowering Humanity Through Ethical AI</h2>
              </div>
              <p>
                Kreasof AI is an independent, mission-driven artificial
                intelligence research laboratory based in Indonesia. Our core
                purpose is to advance the field of Artificial General
                Intelligence (AGI) and ensure its transformative potential
                benefits all of humanity, with a particular focus on aligning AI
                with human values and making it explainable.
              </p>
              <div className="row pt-30">
                <div className="col-sm-6">
                  <div className="counter-item counter-text-wrap counted">
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={100}
                    >
                      100
                    </span>
                    <h5 className="counter-title">Ethical AI Development</h5>
                    <div className="text">
                      Committed to developing AI that aligns with human values
                      and cultural diversity
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="counter-item counter-text-wrap counted">
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={100}
                    >
                      100
                    </span>
                    <h5 className="counter-title">Universal Benefit</h5>
                    <div className="text">
                      Ensuring AI benefits all of humanity, with special focus
                      on Indonesian and Asian contexts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
