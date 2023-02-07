import React from "react";
import pinteres from "../../assets/pinteres.png";
import strip from "../../assets/strip.png";
import airbnb from "../../assets/airbnb.png";
import discor from "../../assets/discor.png";
import intercom from "../../assets/intercom.png";
import netflix from "../../assets/netflix.png";


export const ProductCompany = () => {
  return (
    <div className="productCompany">
      <div className="container">
        <div className="productCompany-items">
          <div className="productCompany-title">
            <span class="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
              Trusted by top-tier product companies
            </span>
          </div>
          <div className="productCompany-item">
            <div class="mb-4 text-center align-middle">
              <img
                src={strip}
                alt="image"
              />
            </div>
            <div class="mb-4 text-center align-middle">
              <img
                src={airbnb}
                alt="image"
              />
            </div>
            <div class="mb-4 text-center align-middle">
              <img
                src={discor}
                alt="image"
              />
            </div>
            <div class="mb-4 text-center align-middle">
              <img
                src={intercom}
                alt="image"
              />
            </div>
            <div class="mb-4 text-center align-middle">
              <img src={pinteres} alt="image" />
            </div>
            <div class="mb-4 text-center align-middle">
              <img
                src={netflix}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
