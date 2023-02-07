import styled from "styled-components";

export const LayoutWrapper = styled.section`
  display: flex;
  min-height: 100vh;

  .layout {
    display: flex;
    flex-direction: column;
    flex: 1;
    header {
      .nav {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        padding: 0 10px;
        .navbar {
          flex: 1;
          display: flex;
          justify-content: start;
          gap: 10px;
          max-width: 100%;
          .navbar-items {
            display: flex;
            gap: 10px;
            form {
              color: #ffffff27;
            }
          }
          .right {
            flex: 1;
            display: flex;
            justify-content: space-between;
            .navbar-buttons {
              display: flex;
              gap: 10px;
            }
          }
        }
      }
    }
    main {
      flex: 1;

      .main-row {
        .createAccount {
          display: flex;
          padding: 9.5rem 0;
          .main-card {
            flex: 1;
            position: relative;
            z-index: 10;
            h1 {
              font-size: 3.5rem;
              font-weight: 700;
            }
            .card-body {
              padding: 30px 45px;
              border-radius: 10px;
              text-align: start;
              margin-left: auto;
              background: #ffffff !important;
              width: 80%;
              .sign-social {
                display: flex;
                gap: 10px;
                .button {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  p {
                    margin-top: 15px;
                  }
                }
              }
              .or-border {
                position: relative;
                p {
                  position: absolute;
                  top: -20px;
                  left: 45%;
                  border-radius: 50%;
                  text-align: center;
                  color: #808080d5;
                  background: #ffffffff;
                  padding: 10px;
                }
              }
              form {
                .form-control {
                  padding: 10px;
                }
              }
              .card-footer {
                a {
                  color: #18113c;
                  letter-spacing: 0.3px;
                  font-weight: 700;
                  &:hover {
                    color: #754ffe;
                  }
                }
              }
            }
            .back-img {
              position: absolute;
              bottom: -55px;
              right: -40px;
              z-index: -1;
            }
          }
        }
        .mid-navbar {
          position: relative;
          z-index: 10;
          background: #ffffff;
          width: 100%;
          height: 72px;
          .container {
            .mid-navbar-row {
              display: flex;
              align-content: center;
              justify-content: space-between;
              .mid-navbar-item {
                margin-top: 25px;
                img {
                  border-radius: 50%;
                }
                span {
                  font-weight: 600;
                  margin-left: 8px;
                  font-size: 18px;
                }
              }
            }
          }
        }
        .course-description {
          background: #f5f4f8;
          padding: 8.5rem 0;
          .course-description-column {
            display: flex;
            gap: 25px;
            flex-direction: column;
            .course-description-title {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              margin: 0 auto;
              width: 70%;
              span {
                font-size: 14px;
                letter-spacing: 2.8px;
                line-height: 22.4px;
                font-weight: 600;
              }
              h2 {
                font-size: 40px;
                font-weight: 700;
                letter-spacing: -0.8px;
                line-height: 52px;
                color: rgb(24, 17, 60);
              }
              p {
                font-size: 20px;
                font-weight: 400;
                letter-spacing: -0.4px;
                line-height: 32px;
              }
            }
            .course-description-card {
              .course-description-card-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 25px;
                .course-description-card-item {
                  .item-column {
                    background: #ffffff;
                    border-radius: 10px;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: center;
                    gap: 15px;
                    .item-inner {
                      display: flex;
                      align-items: start;
                      img {
                        border-radius: 50%;
                      }
                      h2 {
                        font-weight: 700;
                        font-size: 24px;
                        letter-spacing: -0.352px;
                        line-height: 33.6px;
                      }
                      p {
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 19.2px;
                      }
                    }
                    p {
                      font-size: 16px;
                      font-weight: 400;
                      line-height: 25.6px;
                      color: rgb(92, 87, 118);
                    }
                    a {
                      color: rgb(94, 63, 203);
                      font-size: 14px;
                      font-weight: 600;
                      &:hover {
                        color: #754ffe;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .yourInstructor {
          background: #ffffff;
          padding: 8.5rem 0;
          .container {
            .yourInstructor-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding: 0 90px;
              .yourInstructor-item {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-between;
                gap: 30px;
                &:nth-child(2) {
                  align-items: center;
                }
                span {
                  font-size: 14px;
                  font-weight: 600;
                  letter-spacing: 2.8px;
                  line-height: 22.4px;
                  color: rgb(117, 79, 254);
                }
                h2 {
                  font-size: 40px;
                  font-weight: 700;
                  letter-spacing: -0.8px;
                  line-height: 52px;
                  color: rgb(24, 17, 60);
                  span {
                    color: rgb(117, 79, 254);
                    font-size: 40px;
                  }
                }
                p {
                  font-size: 20px;
                  font-weight: 400;
                  line-height: 32px;
                  color: rgb(92, 87, 118);
                }
                .item-footer {
                  width: 80%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  .footer-card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    h2 {
                      font-size: 32px;
                      font-weight: 700;
                      letter-spacing: -2.56px;
                      line-height: 44.2px;
                    }
                    p {
                      font-size: 14px;
                      font-weight: 400;
                      line-height: 22.4px;
                    }
                  }
                }
              }
            }
          }
        }
        .productCompany {
          background: #ffffff;
          padding: 8.5rem 0;
          .productCompany-items {
            .productCompany-title {
              text-align: center;
              margin-bottom: 40px;
              span {
                font-size: 14px;
                letter-spacing: 2.8px;
                line-height: 22.4px;
                font-weight: 600;
              }
            }
            .productCompany-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
        }
        .testimonials {
          background: #f5f4f8;
          padding: 8.5rem 0;
          .testimonials-column {
            .testimonials-title {
              text-align: center;
              margin-bottom: 4.5rem;
              span {
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 2.8px;
                line-height: 22.4px;
                color: rgb(117, 79, 254);
              }
              h2 {
                font-size: 40px;
                font-weight: 700;
                letter-spacing: -0.8px;
                line-height: 52px;
                color: rgb(24, 17, 60);
              }
              p {
                color: rgb(92, 87, 118);
                font-size: 20px;
                font-weight: 400;
                letter-spacing: -0.48px;
                line-height: 32px;
              }
            }
            .testimonials-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              .testimonials-card {
                background: #ffffff;
                border-radius: 10px;
                text-align: center;
                p {
                  padding: 3.5rem;
                  font-size: 20px;
                  font-weight: 400;
                  color: rgb(24, 17, 60);
                  letter-spacing: -0.48px;
                  line-height: 32px;
                }
                .green-footer {
                  background: #29baf9 !important;
                }
                .footer {
                  position: relative;
                  background: #754ffe;
                  padding: 36px 24px 16px;
                  text-align: center;
                  border-radius: 0px 0px 10px 10px;
                  img {
                    width: 80px;
                    height: 80px;
                    position: absolute;
                    border-radius: 50%;
                    top: -40px;
                    left: 42%;
                  }
                  h3 {
                    font-size: 20px;
                    font-weight: 500;
                    letter-spacing: -0.352px;
                    line-height: 28px;
                  }
                  p {
                    font-size: 14px;
                    padding: 0;
                  }
                }
              }
            }
          }
        }
        .askedQuestions {
          background: #ffffff;
          padding: 8.5rem 0;
          .askedQuestions-title {
            width: 60%;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 72px;
            span {
              font-size: 14px;
              font-weight: 600;
              letter-spacing: 2.8px;
              line-height: 22.4px;
            }
            h2 {
              font-size: 40px;
              font-weight: 700;
              letter-spacing: -0.8px;
              line-height: 48px;
            }
            p {
              font-size: 20px;
              font-weight: 500;
              letter-spacing: -0.48px;
              line-height: 32px;
              color: rgb(100, 116, 139);
            }
          }
          .askedQuestions-accordion {
            width: 50%;
            margin: 0 auto;
            .accordion-button {
              font-size: 18px;
              font-weight: 700;
              letter-spacing: normal;
              line-height: 19.2px;
            }
            .accordion-body {
              color: rgb(100, 116, 139);
            }
            .accordion-item {
              border: 0;
              border-bottom: 1px solid rgba(100, 116, 139, 0.2) !important;
            }
            .more {
              margin-top: 72px;
            }
          }
        }
        .join {
          background: #f1f5f9;
          background-image: url("https://geeks-react.netlify.app/static/media/course-graphics.171832eb5421ed89e4654944532c6886.svg");
          padding: 120px 0;
          .join-column {
            width: 70%;
            margin: 0 auto;
            text-align: center;
            h2 {
              font-size: 40px;
              font-weight: 600;
              letter-spacing: -0.8px;
              line-height: 48px;
              margin-bottom: 8px;
            }
            p {
              width: 80%;
              margin: 0 auto;
              font-size: 20px;
              font-weight: 500;
              color: rgb(100, 116, 139);
              margin-bottom: 40px;
            }
          }
        }
      }
    }
    footer {
      background: #ffffff;
      padding-top: 72px;

      .footer-row {
        display: flex;
        .footer-card {
          flex: 1;
          text-align: start;
          p {
            font-size: 14px;
            font-weight: 400;
            color: rgb(100, 116, 139);
          }
          li {
            padding: 0;
            width: max-content;
            a {
              font-size: 14px;
              font-weight: 400;
              padding: 2px 0;
              color: rgb(100, 116, 139);
              &:hover {
                color: rgb(117, 79, 254);
              }
            }
          }
          .card-icons {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 5px;
          }
        }
      }
      .row {
        margin-top: 40px;
        span {
          font-size: 14px;
          font-weight: 400;
          color: rgb(71, 85, 105);
        }
        .nav {
          a {
            font-size: 16px;
            font-weight: 400;
            color: rgb(71, 85, 105);
            &:hover {
              color: rgb(117, 79, 254);
            }
          }
        }
      }
    }
  }
`;
