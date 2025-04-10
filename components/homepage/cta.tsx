import Link from "next/link";
import React from "react";

export default function HomepageCTA() {
  return (
    <section
      className="cta-area bgs-cover py-130 rpy-100"
      style={{ backgroundImage: "url(assets/images/backgrounds/cta.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-8">
            <div
              className="cta-content text-white rmb-35"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="section-title mb-40">
                <span className="subtitle d-block mb-10">Join Our Mission</span>
                <h2>Partner with Us to Shape the Future of Ethical AI</h2>
              </div>
              <p className="mb-30">
                Collaborate with Kreasof AI to advance ethical AI development,
                contribute to research, or implement culturally-aware AI
                solutions in your organization.
              </p>
              <Link legacyBehavior href="/contact">
                <a className="theme-btn">
                  Partner with Us <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="cta-btn text-lg-center text-start ps-lg-0 ps-2"
              data-aos="zoom-in-right"
              data-aos-duration={1000}
            >
              <a
                href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                className="mfp-iframe video-play"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
