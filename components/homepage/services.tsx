import Link from "next/link";
import React from "react";

export default function HomepageServices() {
  return (
    <section
      className="services-area bgp-bottom bgc-navyblue pb-55 rel z-2"
      style={{
        backgroundImage: "url(assets/images/backgrounds/wave-shape.png)",
      }}
    >
      <div className="container">
        <div className="services-wrap">
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box">
                <div className="icon">
                  <i className="flaticon-customer-service-1" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      AI Alignment Research
                    </Link>
                  </h4>
                  <p>
                    Developing methods to ensure AGI aligns with human values
                    and intentions, with a focus on Indonesian and Asian ethical
                    frameworks.
                  </p>
                  <hr />
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Explainable AI
                    </Link>
                  </h4>
                  <p>
                    Creating transparent and interpretable AI systems that can
                    be understood by humans, particularly in culturally
                    sensitive contexts.
                  </p>
                  <hr />
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box">
                <div className="icon">
                  <i className="flaticon-earning" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Culturally-Aware AI
                    </Link>
                  </h4>
                  <p>
                    Building AI systems that respect and reflect diverse
                    cultural values, starting with Indonesian and Asian
                    contexts.
                  </p>
                  <hr />
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <blockquote
              className="blockquote-one text-white"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="text">
                The development of full artificial intelligence could spell the
                end of the human race. It would take off on its own, and
                re-design itself at an ever increasing rate. Humans, who are
                limited by slow biological evolution, couldn't compete, and
                would be superseded.
              </div>
              <div className="author">
                <img
                  src="assets/images/blog/stephen-hawking.jpg"
                  alt="Author"
                />
                <div className="name">
                  <h5>Stephen Hawking</h5> <span>Theoretical Physicist</span>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
