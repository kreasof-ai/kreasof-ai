import Link from "next/link";
import React from "react";

export default function HomepageSolutions() {
  return (
    <section id="services" className="solutions-area pb-100 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-11">
            <div
              className="section-title text-center mb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>Our Research Applications & Educational Initiatives</h2>
              <p>
                Kreasof AI combines cutting-edge research with practical
                applications and educational programs to democratize AI
                knowledge and ensure universal benefit.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6 col-sm-10">
            <div
              className="fancy-box"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/fancy-box/fancy-box1.jpg"
                  alt="Fancy Box"
                />
              </div>
              <div className="content">
                <div className="icon-title">
                  <i className="flaticon-meeting" />
                  <h5>
                    <Link legacyBehavior href="service-details">
                      AI Education Platform
                    </Link>
                  </h5>
                </div>
                <div className="inner-content">
                  <p>
                    Comprehensive educational programs from fundamentals to
                    advanced AGI concepts, with a focus on ethical development
                    and cultural awareness.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/fancy-box-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10">
            <div
              className="fancy-box"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/fancy-box/fancy-box2.jpg"
                  alt="Fancy Box"
                />
              </div>
              <div className="content">
                <div className="icon-title">
                  <i className="flaticon-financial-advisor" />
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Research Partnerships
                    </Link>
                  </h5>
                </div>
                <div className="inner-content">
                  <p>
                    Collaborating with universities, tech companies, and
                    government bodies to advance AI research and development in
                    Indonesia and beyond.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/fancy-box-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10">
            <div
              className="fancy-box"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img
                  src="assets/images/fancy-box/fancy-box3.jpg"
                  alt="Fancy Box"
                />
              </div>
              <div className="content">
                <div className="icon-title">
                  <i className="flaticon-meeting" />
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Ethical AI Implementation
                    </Link>
                  </h5>
                </div>
                <div className="inner-content">
                  <p>
                    Practical applications of our research in healthcare,
                    education, and sustainability, with a focus on cultural
                    sensitivity and ethical considerations.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/fancy-box-bg.png"
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
