import Link from "next/link";
import React from "react";

export default function HomepageManagement() {
  return (
    <section
      className="management-area bgp-bottom bgc-navyblue py-60 pb-100"
      style={{
        backgroundImage: "url(assets/images/backgrounds/wave-shape.png)",
      }}
    >
      <div className="container">
        <div className="row gap-110 align-items-center">
          <div className="col-lg-6">
            <div
              className="management-content text-white mt-40"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-30">
                <h2>Our Organizational Structure</h2>
              </div>
              <p>
                Kreasof AI is structured to maximize both research impact and
                financial sustainability, comprising two interconnected entities
                working in harmony.
              </p>
              <div className="row gap-50 pt-25">
                <div className="col-md-6">
                  <div className="iconic-box style-nine text-white">
                    <div className="icon">
                      <i className="fal fa-laptop-code" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link legacyBehavior href="#">
                          Kreasof AI Research
                        </Link>
                      </h5>
                      <p>
                        Focused on foundational AI and AGI research, with
                        emphasis on AI alignment, explainable AI, and
                        culturally-aware AI development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="iconic-box style-nine text-white">
                    <div className="icon">
                      <i className="fal fa-cog" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link legacyBehavior href="#">
                          Kreasof AI Capital
                        </Link>
                      </h5>
                      <p>
                        Applying AI research to financial markets through
                        ethical investment strategies, generating returns to
                        fund research activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="management-images my-40"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img src="assets/images/about/management1.png" alt="Management" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
