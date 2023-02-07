import React from "react";

function YourInstructor() {
  return (
    <div className="yourInstructor">
      <div className="container">
        <div className="yourInstructor-row">
          <div className="yourInstructor-item">
            <span class="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
              YOUR INSTRUCTOR
            </span>
            <h2 class="mb-2 display-4 fw-bold mb-3">
              Hi, I’m <span>James Davies</span>,<br /> I will be taking you
              through lessons.
            </h2>
            <p class="fs-3 pe-6">
              Create beautiful website with this Geeks UI template. Get started
              building a site today.
            </p>
            <div class="item-footer">
              <div className="footer-card">
                <h2>45</h2>
                <p>Lessons</p>
              </div>
              <div className="footer-card">
                <h2>10,500+</h2>
                <p>Students</p>
              </div>
              <div className="footer-card">
                <h2>12+</h2>
                <p>Learning Hours</p>
              </div>
            </div>
          </div>
          <div className="yourInstructor-item">
            <img
              src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourInstructor;
