import React from "react";
import img2 from "../../assets/icon2.png";
import img3 from "../../assets/icon3.png";
import img4 from "../../assets/icon4.png";
import img5 from "../../assets/icon5.png";

export default function CourseDescription() {
  return (
    <div className="course-description">
      <div className="container">
        <div className="course-description-column">
          <div className="course-description-title">
            <span class="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
              Course Description
            </span>
            <h2 class="mb-2 display-4 fw-bold ">What will you learn?</h2>
            <p class="lead">
              Vanilla JS is a fast, lightweight, cross-platformframework for
              building incredible, powerful JavaScript applications.
            </p>
          </div>
          <div className="course-description-card">
            <div className="course-description-card-row">
              <div className="course-description-card-item">
                <div className="item-column">
                  <div className="item-inner">
                    <img src={img2} alt="" />
                    <div class="ms-md-4">
                      <h2 class="fw-bold mb-1">
                        Introduction to JavaScript
                        <span class="ms-2 badge bg-warning">Free</span>
                      </h2>
                      <p class="text-uppercase fs-6 fw-semi-bold mb-0">
                        <span class="text-dark">Courses - 1</span>{" "}
                        <span class="ms-3">6 Lessons</span>{" "}
                        <span class="ms-3">1 HOUR 12 MIN</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    In et tempus dui, in porta dolor. Donec molestie a purus ut
                    interdum. Donec quis felis dignissim, luctus libero ornare
                  </p>
                  <a
                    role="button"
                    tabindex="0"
                    href="#"
                    class="btn-link btn-link-primary"
                  >
                    <u>View Chapter Details +</u>
                  </a>
                </div>
              </div>
              <div className="course-description-card-item">
                <div className="item-column">
                  <div className="item-inner">
                    <img src={img3} alt="" />
                    <div class="ms-md-4">
                      <h2 class="fw-bold mb-1">JavaScript Beginning</h2>
                      <p class="text-uppercase fs-6 fw-semi-bold mb-0">
                        <span class="text-dark">Courses - 2</span>{" "}
                        <span class="ms-3">4 Lessons</span>{" "}
                        <span class="ms-3">32 MIN</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    Malesuada fames ac turpis egesta mpor tempus tincidunt.
                    Aliquam congue lacus ac tellus consectetur malesuada.
                  </p>
                  <a
                    role="button"
                    tabindex="0"
                    href="#"
                    class="btn-link btn-link-primary"
                  >
                    <u>View Chapter Details +</u>
                  </a>
                </div>
              </div>
              <div className="course-description-card-item">
                <div className="item-column">
                  <div className="item-inner">
                    <img src={img4} alt="" />
                    <div class="ms-md-4">
                      <h2 class="fw-bold mb-1">Variables and Constants</h2>
                      <p class="text-uppercase fs-6 fw-semi-bold mb-0">
                        <span class="text-dark">Courses - 3</span>{" "}
                        <span class="ms-3">8 Lessons</span>{" "}
                        <span class="ms-3">10 MIN</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare
                    turpis vequet elit nec, imperdiet lectuna liquam qs.
                  </p>
                  <a
                    role="button"
                    tabindex="0"
                    href="#"
                    class="btn-link btn-link-primary"
                  >
                    <u>View Chapter Details +</u>
                  </a>
                </div>
              </div>
              <div className="course-description-card-item">
                <div className="item-column">
                  <div className="item-inner">
                    <img src={img5} alt="" />
                    <div class="ms-md-4">
                      <h2 class="fw-bold mb-1">Types and Operators</h2>
                      <p class="text-uppercase fs-6 fw-semi-bold mb-0">
                        <span class="text-dark">Courses - 4</span>{" "}
                        <span class="ms-3">10 Lessons</span>{" "}
                        <span class="ms-3">32 MIN</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    In lobortis quam eu augue spendisse imperdiet nec orci
                    ipsum, tempus pharetra posuere imperdiet, lacinia a nisl.
                  </p>
                  <a
                    role="button"
                    tabindex="0"
                    href="#"
                    class="btn-link btn-link-primary"
                  >
                    <u>View Chapter Details +</u>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
