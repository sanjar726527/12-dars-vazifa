import React from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { LayoutWrapper } from "./LayoutWrapper";
import { IoIosArrowDown } from "react-icons/io";
import { CreateAccount } from "../CreateAccount";
import { RxLayers } from "react-icons/rx";
import { GrFormNext } from "react-icons/gr";
import {
  BsFacebook,
  BsInstagram,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import logo from "../../assets/logo.png";
import StyledButton from "../Button";
import CourseDescription from "../CourseDescription";
import MidNavbar from "../MidNavbar";
import YourInstructor from "../YourInstructor";
import { ProductCompany } from "../ProductCompany";
import Testimonials from "../Testimonials";
import AskedQuestions from "../AskedQuestions";
import Join from "../Join";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <div className="layout">
        <header>
          <div className="nav">
            <a className="navbar-brand m-3" href="/">
              <img src={logo} alt="" />
            </a>
            <div className="navbar">
              <div className="navbar-items">
                {/* Browse dropdown */}
                <Dropdown>
                  <p> Browse</p>
                  <IoIosArrowDown className="icon" />
                  <div className="items d-flex">
                    <a href="#" className="item">
                      <p>Web Development</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Bootstrap
                        </a>
                        <a href="#" className="item2">
                          React
                        </a>
                        <a href="#" className="item2">
                          GraphQl
                        </a>
                        <a href="#" className="item2">
                          Gatsby
                        </a>
                        <a href="#" className="item2">
                          Grunt
                        </a>
                        <a href="#" className="item2">
                          Svelte
                        </a>
                        <a href="#" className="item2">
                          Meteor
                        </a>
                        <a href="#" className="item2">
                          HTML5
                        </a>
                        <a href="#" className="item2">
                          Angular
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      <p>Design</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Graphic Design
                        </a>
                        <a href="#" className="item2">
                          Illustrator
                        </a>
                        <a href="#" className="item2">
                          UX / UI Design
                        </a>
                        <a href="#" className="item2">
                          Figma Design
                        </a>
                        <a href="#" className="item2">
                          Adobe XD
                        </a>
                        <a href="#" className="item2">
                          Sketch
                        </a>
                        <a href="#" className="item2">
                          Icon Design
                        </a>
                        <a href="#" className="item2">
                          Photoshop
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      Mobile App
                    </a>
                    <a href="#" className="item">
                      Mobile App
                    </a>
                    <a href="#" className="item">
                      Marketing
                    </a>
                    <a href="#" className="item">
                      Music
                    </a>
                    <a href="#" className="item">
                      Life Style
                    </a>
                    <a href="#" className="item">
                      Business
                    </a>
                    <a href="#" className="item">
                      Photography
                    </a>
                  </div>
                </Dropdown>
                {/* Landings dropdown */}
                <Dropdown>
                  <p>Landings</p>
                  <IoIosArrowDown className="icon" />
                  <div className="items">
                    <span className="disable">LANDINGS</span>
                    <a href="#" className="item">
                      Courses
                    </a>
                    <a href="#" className="item">
                      Lead Courses
                    </a>
                    <a href="#" className="item">
                      Request Access
                    </a>
                    <a href="#" className="item">
                      Sass
                    </a>
                  </div>
                </Dropdown>
                {/* Pages dropdown */}
                <Dropdown>
                  <p>Pages</p>
                  <IoIosArrowDown className="icon" />
                  <div className="items">
                    <a href="#" className="item">
                      <p>Course</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Course Single
                        </a>
                        <a href="#" className="item2">
                          Course Single v2
                        </a>
                        <a href="#" className="item2">
                          Course Resume
                        </a>
                        <a href="#" className="item2">
                          Course Category
                        </a>
                        <a href="#" className="item2">
                          Course Checkout
                        </a>
                        <a href="#" className="item2">
                          Course List/Grid
                        </a>
                        <a href="#" className="item2">
                          Add New Course
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      <p>Paths</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Browse Path
                        </a>
                        <a href="#" className="item2">
                          Path Single
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      <p>Blog</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Listing
                        </a>
                        <a href="#" className="item2">
                          Article
                        </a>
                        <a href="#" className="item2">
                          Article
                        </a>
                        <a href="#" className="item2">
                          Sidebar
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      <p>Career</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Overview
                        </a>
                        <a href="#" className="item2">
                          Listing
                        </a>
                        <a href="#" className="item2">
                          Opening
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      <p>Specialty</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Coming Soon
                        </a>
                        <a href="#" className="item2">
                          Error 404
                        </a>
                        <a href="#" className="item2">
                          Maintenance Mode
                        </a>
                        <a href="#" className="item2">
                          Terms & Conditions
                        </a>
                      </div>
                    </a>
                    <span className="shadow-bottom"></span>
                    <a href="#" className="item">
                      About
                    </a>
                    <a href="#" className="item">
                      <p>
                        Help Center{" "}
                        <span className="ms-1 badge bg-primary">New</span>
                      </p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <a href="#" className="item2">
                          Help Center
                        </a>
                        <a href="#" className="item2">
                          FAQ's
                        </a>
                        <a href="#" className="item2">
                          Guide
                        </a>
                        <a href="#" className="item2">
                          Guide Single
                        </a>
                        <a href="#" className="item2">
                          Support
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      Pricing
                    </a>
                    <a href="#" className="item">
                      Compare Plan
                    </a>
                    <a href="#" className="item">
                      Contact
                    </a>
                  </div>
                </Dropdown>
                {/* Account */}
                <Dropdown>
                  <p>Accounts</p>
                  <IoIosArrowDown className="icon" />
                  <div className="items">
                    <span className="disable">Accounts</span>
                    <a href="#" className="item">
                      <p>Instructor</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <h5 className="dropdown-header text-dark">
                          Instructor
                        </h5>
                        <p className="dropdown-text mb-0 text-wrap">
                          Instructor dashboard for manage courses and earning.
                        </p>
                        <span className="shadow-bottom"></span>
                        <a href="#" className="item2">
                          Dashboard
                        </a>
                        <a href="#" className="item2">
                          Profile
                        </a>
                        <a href="#" className="item2">
                          My Courses
                        </a>
                        <a href="#" className="item2">
                          Orders
                        </a>
                        <a href="#" className="item2">
                          Reviews
                        </a>
                        <a href="#" className="item2">
                          Students
                        </a>
                        <a href="#" className="item2">
                          Payouts
                        </a>
                        <a href="#" className="item2">
                          Earning
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      <p>Students</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <h5 className="dropdown-header text-dark">STUDENTS</h5>
                        <p className="dropdown-text mb-0 text-wrap">
                          Students dashboard to manage your courses and
                          subscriptions.
                        </p>
                        <span className="shadow-bottom"></span>
                        <a href="#" className="item2">
                          Dashboard
                        </a>
                        <a href="#" className="item2">
                          Subscriptions
                        </a>
                        <a href="#" className="item2">
                          Payments
                        </a>
                        <a href="#" className="item2">
                          Billing Info
                        </a>
                        <a href="#" className="item2">
                          Invoice
                        </a>
                        <a href="#" className="item2">
                          Invoice Details
                        </a>
                        <a href="#" className="item2">
                          Bookmarked
                        </a>
                        <a href="#" className="item2">
                          My Path
                        </a>
                      </div>
                    </a>
                    <a href="#" className="item">
                      <p>Admin</p>
                      <GrFormNext className="icon2" />
                      <div className="items2">
                        <h5 className="dropdown-header text-dark">
                          MASTER ADMIN
                        </h5>
                        <p className="dropdown-text mb-0 text-wrap">
                          Master admin dashboard to manage courses, user, site
                          setting, and work with amazing apps.
                        </p>
                        <span className="shadow-bottom"></span>
                        <StyledButton variant="great">
                          <a href="#"> Go to Dashboard</a>
                        </StyledButton>
                      </div>
                    </a>
                    <span className="shadow-bottom"></span>
                    <a href="#" className="item">
                      Sign In
                    </a>
                    <a href="#" className="item">
                      Sign Up
                    </a>
                    <a href="#" className="item">
                      Forgot Password
                    </a>
                    <a href="#" className="item">
                      Edit Profile
                    </a>
                    <a href="#" className="item">
                      Security
                    </a>
                    <a href="#" className="item">
                      Social Profiles
                    </a>
                    <a href="#" className="item">
                      Notifications
                    </a>
                    <a href="#" className="item">
                      Privacy Settings
                    </a>
                    <a href="#" className="item">
                      Delete Profile
                    </a>
                    <a href="#" className="item">
                      Linked Accounts
                    </a>
                  </div>
                </Dropdown>
                <Dropdown>
                  <BsThreeDots size={22} />
                  <div className="items items3">
                    <a href="#" className="item item3">
                      <div>
                        <CgFileDocument size={22} className="icon3" />
                      </div>
                      <div className="info-doc">
                        <h5 className="mb-0">Documentations</h5>
                        <p className="mb-0">Browse the all documentation</p>
                      </div>
                    </a>
                    <a href="#" className="item item3">
                      <div>
                        <RxLayers size={22} className="icon3" />
                      </div>
                      <div className="info-doc">
                        <h5 className="mb-0">
                          Changelog{" "}
                          <span className="text-primary ms-1">v1.5.1</span>
                        </h5>
                        <p className="mb-0">See what's new</p>
                      </div>
                    </a>
                  </div>
                </Dropdown>
              </div>
              <div className="right">
                <form className="d-flex align-items-center">
                  <span className="position-absolute ps-3 search-icon">
                    <BiSearch fill="white" />
                  </span>
                  <input
                    placeholder="Search Courses"
                    type="Search"
                    id="formSearch"
                    className="ps-5 form-control"
                    style={{
                      background: "#ffffff37",
                      color: "#ffffff",
                      height: "50px",
                      width: "250px",
                      border: "0",
                    }}
                  />
                </form>
                <div className="navbar-buttons">
                  <StyledButton variant="white">Sign up</StyledButton>
                  <StyledButton variant="great">Sign in</StyledButton>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="main-row">
            <CreateAccount />
            <MidNavbar />
            <CourseDescription />
            <YourInstructor />
            <ProductCompany />
            <Testimonials />
            <AskedQuestions />
            <Join />
          </div>
        </main>
        <footer>
          <div className="container">
            <div className="footer-row">
              <div className="footer-card">
                <img
                  src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
                  alt=""
                  class="logo-inverse"
                />
                <div class="mt-4">
                  <p>
                    Geek is feature-rich components and beautifully Bootstrap
                    UIKit for developers, built with bootstrap responsive
                    framework.
                  </p>
                  <div className="card-icons">
                    <BsFacebook fill="#585572" />
                    <BsTwitter fill="#585572" />
                    <BsInstagram fill="#585572" />
                  </div>
                </div>
              </div>
              <div className="footer-card">
                <h3 class="fw-bold mb-3">Company</h3>
                <ul class="nav flex-column">
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      About
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Pricing
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Blog
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Careers
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-card">
                <h3 class="fw-bold mb-3">Support</h3>
                <ul class="nav nav-footer flex-column nav-x-0 list-unstyled">
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Help and Support
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Become Instructor
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Get the app
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      FAQ’s
                    </a>
                  </li>
                  <li class=" ">
                    <a class="nav-link" href="/marketing/landings/course-lead/">
                      Tutorial
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-card">
                <h3 class="fw-bold mb-3">Get in touch</h3>
                <p>339 McDermott Points Hettingerhaven, NV 15283</p>
                <p class="mb-1">
                  Email:{" "}
                  <a href="/marketing/landings/course-lead/">
                    support@geeksui.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <span class="text-dark fw-semi-bold">(000) 123 456 789</span>
                </p>
                <div class="d-flex">
                  <a href="/marketing/landings/course-lead/">
                    <img
                      src="	https://geeks-react.netlify.app/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                  <a class="ms-2" href="/marketing/landings/course-lead/">
                    <img
                      src="https://geeks-react.netlify.app/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="align-items-center g-0 border-top py-2 mt-6 row">
              <div class="col-lg-4 col-md-5 col-sm-12">
                <span>© 2023 Geeks-UI, Inc. All Rights Reserved</span>
              </div>
              <div class="d-md-flex justify-content-end col-lg-8 col-md-7 col-sm-12">
                <nav class="nav nav-footer">
                  <a
                    class="nav-link ps-0"
                    href="/marketing/landings/course-lead/"
                  >
                    Privacy Policy
                  </a>
                  <a
                    class="nav-link px-2 px-md-3"
                    href="/marketing/landings/course-lead/"
                  >
                    Cookie Notice{" "}
                  </a>
                  <a
                    class="nav-link d-none d-lg-block"
                    href="/marketing/landings/course-lead/"
                  >
                    Do Not Sell My Personal Information{" "}
                  </a>
                  <a class="nav-link" href="/marketing/landings/course-lead/">
                    Terms of Use
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LayoutWrapper>
  );
};
