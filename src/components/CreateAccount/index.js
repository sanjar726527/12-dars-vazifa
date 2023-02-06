import React from "react";
import StyledButton from "../Button";
import { IoLogoFacebook, IoLogoTwitter, IoMdMail } from "react-icons/io";

export const CreateAccount = () => {
  return (
    <div className="container">
      <div className="createAccount">
        <div className="main-card">
          <h1 className="text-white">Become a Vanilla JavaScript Developer</h1>
          <p className="mb-4 lead text-white-50">
            In this tutorial, we are going to learn about JavaScript (Vanilla
            JS) - for building incredible, powerful JavaScript applications.
          </p>
          <div className="card-social">
            <div className="mb-5">
              <div className="mb-2 text-white-50">
                <span className="me-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="me-1 text-warning"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span className="align-top">4 Hours</span>
              </div>
              <div className="mb-2 text-white-50">
                <span className="me-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="me-1 text-warning"
                  >
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                </span>
                <span className="align-top">12 Videos</span>
              </div>
              <div className="mb-2 text-white-50">
                <span className="me-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="me-1 text-warning"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <span className="align-top">10,234+ Enrolled</span>
              </div>
            </div>
            <a href="#">
              <StyledButton>Watch Preview</StyledButton>
            </a>
          </div>
        </div>
        <div className="main-card">
          <div className="card-body">
            <h3 className="mb-4 lh-1 fw-bold">Create Free Account</h3>
            <div className="sign-social mb-4">
              <StyledButton variant="outline" className="button">
                <IoMdMail size={15} fill="#e53f3c" className="me-1" />
                <p>Google</p>
              </StyledButton>
              <StyledButton variant="outline" className="button">
                <IoLogoTwitter size={15} fill="#4fc5f9" className="me-1" />
                <p>Twitter</p>
              </StyledButton>
              <StyledButton variant="outline" className="button">
                <IoLogoFacebook size={15} fill="#754ffe" className="me-1" />
                <p>Facebook</p>
              </StyledButton>
            </div>
            <div className="or-border mb-4">
              <div className="border-bottom"></div>
              <p>OR</p>
            </div>
            <form className="mb-4">
              <div className="mb-3">
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  className="form-control"
                />
              </div>
              <StyledButton variant="primary">
                Start Courses for Free
              </StyledButton>
            </form>
            <div class="bg-white px-6 py-4 card-footer border-top">
              <p class="mb-0">
                By continuing you accept the{" "}
                <a
                  class="text-inherit fw-semi-bold"
                  href="/marketing/landings/course-lead/"
                >
                  Terms of Use
                </a>
                ,
                <a
                  class="text-inherit fw-semi-bold"
                  href="/marketing/landings/course-lead/"
                >
                  {" "}
                  Privacy Policy
                </a>
                , and{" "}
                <a
                  class="text-inherit fw-semi-bold"
                  href="/marketing/landings/course-lead/"
                >
                  Data Policy
                </a>
              </p>
            </div>
          </div>
          <img
            className="back-img"
            src="https://geeks-react.netlify.app/static/media/dots-pattern.58f3b03e401a0591814fc09608471b7c.svg"
          />
        </div>
      </div>
    </div>
  );
};
