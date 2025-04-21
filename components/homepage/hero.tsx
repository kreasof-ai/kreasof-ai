import Link from "next/link";
import React from "react";

export default function HomepageHero() {
  return (
    <section
      id="home"
      className="hero-area bgs-cover py-250 rpy-150 overlay"
      style={{ backgroundImage: "url(assets/images/hero/hero-new.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10 col-md-11">
            <div className="hero-content text-center text-white">
              <span
                className="subtitle-one mb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <i className="fas fa-brain" /> Pioneering Ethical AI
              </span>
              <h1
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Kreasof AI: Ethical & Culturally-Aware AGI for Universal Benefit
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Advancing Artificial General Intelligence with a focus on
                ethical development, cultural awareness, and universal
                accessibility. Based in Indonesia, serving humanity.
              </p>
              <div
                className="hero-btns"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="#" legacyBehavior>
                  <a className="theme-btn">
                    Our Mission <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="theme-btn style-two">
                    Research Areas <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
