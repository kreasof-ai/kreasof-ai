import Link from "next/link";
import React from "react";

export default function HomepageProjects() {
  return (
    <section
      id="projects"
      className="project-area pt-130 rpt-100 pb-100 rpb-70"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div
              className="section-title text-center mb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>Our Research Applications & Initiatives</h2>
              <p>
                Explore how Kreasof AI is advancing ethical AI development
                through research, education, and practical applications in
                various domains.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div
              className="fancy-box style-two"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/fancy-box/research-1.png"
                  alt="Fancy Box"
                />
              </div>
              <div className="content">
                <a href="#" className="category">
                  AI Education
                </a>
                <h6>
                  <Link legacyBehavior href="service-details">
                    Democratizing AI Knowledge Through Education
                  </Link>
                </h6>
                <div className="inner-content">
                  <p>
                    Developing comprehensive educational programs that make AI
                    knowledge accessible to all, with a focus on ethical
                    development.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/fancy-box-two-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div
              className="fancy-box style-two"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/fancy-box/research-2.png"
                  alt="Fancy Box"
                />
              </div>
              <div className="content">
                <a href="#" className="category">
                  AI Alignment
                </a>
                <h6>
                  <Link legacyBehavior href="service-details">
                    Ensuring AI Aligns with Human Values
                  </Link>
                </h6>
                <div className="inner-content">
                  <p>
                    Developing frameworks and methodologies to ensure AI systems
                    align with human values and ethical principles.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/fancy-box-two-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div
              className="fancy-box style-two"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/fancy-box/research-3.png"
                  alt="Fancy Box"
                />
              </div>
              <div className="content">
                <a href="#" className="category">
                  Cultural AI
                </a>
                <h6>
                  <Link legacyBehavior href="service-details">
                    Culturally-Aware AI Development
                  </Link>
                </h6>
                <div className="inner-content">
                  <p>
                    Building AI systems that respect and reflect diverse
                    cultural values, starting with Indonesian and Asian
                    contexts.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/fancy-box-two-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div
              className="fancy-box style-two"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/fancy-box/research-4.png"
                  alt="Fancy Box"
                />
              </div>
              <div className="content">
                <a href="#" className="category">
                  Research
                </a>
                <h6>
                  <Link legacyBehavior href="service-details">
                    Advancing AGI Research
                  </Link>
                </h6>
                <div className="inner-content">
                  <p>
                    Pioneering research in Artificial General Intelligence with
                    a focus on safety, explainability, and ethical development.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/fancy-box-two-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
