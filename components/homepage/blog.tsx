import Link from "next/link";
import React from "react";

export default function HomepageBlog() {
  return (
    <section id="blog" className="blog-area pb-100 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-11">
            <div
              className="section-title text-center mb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>Get Every Single Updates and Learn Our News &amp; Blog</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6 col-sm-10">
            <div
              className="blog-item style-two"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/blog/blog4.png" alt="Blog" />
                <div className="date">
                  <b>25</b>
                  <span>Sep</span>
                </div>
              </div>
              <div className="content">
                <a href="#" className="category">
                  Business
                </a>
                <h5>
                  <Link legacyBehavior href="blog-details">
                    Meet Success the Cale Smashing Book By Addy Osmania
                  </Link>
                </h5>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-user-circle" />{" "}
                    <a href="#">Roger J. Spaulding</a>
                  </li>
                  <li>
                    <i className="far fa-comment-lines" />{" "}
                    <a href="#">Comments(5)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10">
            <div
              className="blog-item style-two"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/blog/blog5.png" alt="Blog" />
                <div className="date">
                  <b>28</b>
                  <span>Sep</span>
                </div>
              </div>
              <div className="content">
                <a href="#" className="category">
                  Finance
                </a>
                <h5>
                  <Link legacyBehavior href="blog-details">
                    Practical Design Tips Guidelines For Beginner Designers
                  </Link>
                </h5>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-user-circle" />{" "}
                    <a href="#">Roger J. Spaulding</a>
                  </li>
                  <li>
                    <i className="far fa-comment-lines" />{" "}
                    <a href="#">Comments(5)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-10">
            <div
              className="blog-item style-two"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="image">
                <img src="assets/images/blog/blog6.png" alt="Blog" />
                <div className="date">
                  <b>30</b>
                  <span>Sep</span>
                </div>
              </div>
              <div className="content">
                <a href="#" className="category">
                  Research
                </a>
                <h5>
                  <Link legacyBehavior href="blog-details">
                    Meet Success the Cale Smashing Book By Addy Osmania
                  </Link>
                </h5>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-user-circle" />{" "}
                    <a href="#">Roger J. Spaulding</a>
                  </li>
                  <li>
                    <i className="far fa-comment-lines" />{" "}
                    <a href="#">Comments(5)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
