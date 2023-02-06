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
        }
      }
    }
  }
`;
