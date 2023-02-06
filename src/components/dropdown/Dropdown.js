import styled from "styled-components";

export const Dropdown = styled.button`
  color: #e8e7ed !important;
  background: transparent;
  border: none;
  font-weight: 500;
  transition: all 0.5s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
  padding-bottom: 20px;
  &:hover {
    .items {
      opacity: 1;
      visibility: visible;
    }
  }
  .icon {
    margin: 3px 0 0 5px !important;
    fill: rgb(168, 163, 185);
  }
  .items {
    position: absolute;
    visibility: hidden;
    z-index: 2;
    top: 40px;
    left: 0px;
    opacity: 0;
    padding: 20px;
    width: 190px;
    background: #f5f4f8;
    color: #18113c;
    border-radius: 8px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    text-align: left;
    .disable {
      border-bottom: transparent;
      color: #8e87af !important;
      font-size: 0.7rem;
      font-weight: 500;
      padding: 0.3125rem 0.35rem;
      text-transform: uppercase;
    }
    .item {
      position: relative;
      display: flex;
      font-size: 0.875rem;
      justify-content: space-between;
      padding: 5px;
      padding-right: 50px;
      margin-right: -50px;
      color: inherit !important;
      &:hover {
        .items2 {
          opacity: 1;
          visibility: visible;
        }
        color: #754ffe !important;
        h5 {
          color: #18113c;
        }
      }
      .icon2 {
        margin: 6px 0 0 10px;
        fill: rgb(168, 163, 185) !important;
      }
      .info-doc {
        h5 {
          font-size: 0.875rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
    .shadow-bottom {
      border: 0;
      border-top: 1px solid;
      color: #dfdfe2;
      margin: 1rem 0;
      opacity: 1;
    }
  }
  .items2 {
    position: absolute;
    z-index: 4;
    width: 190px;
    visibility: hidden;
    top: -20px;
    left: 172px;
    opacity: 0;
    padding: 20px;
    background: #f5f4f8;
    color: #18113c;
    border-radius: 8px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    text-align: left;
    p {
      font-size: 0.6875rem;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 0.2rem;
      padding: 5px;
      color: rgb(168, 163, 185);
    }
    h5 {
      font-size: 0.75rem;
      line-height: 1.4;
      color: #a8a3b9;
      padding: 5px;

      text-transform: uppercase;
    }
    .item2 {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 5px;
      color: inherit !important;
      &:hover {
        color: #754ffe !important;
      }
    }
  }
  .items3 {
    width: 250px;
    .item3 {
      display: grid;
      grid-template-columns: 0.2fr 1fr;
      gap: 10px;
      .icon3 {
        color: #754ffe !important;
      }
    }
  }
`;
