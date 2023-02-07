import React from "react";
import StyledButton from "../Button";

export default function Join() {
  return (
    <div className="join">
      <div className="container">
        <div class="join-column">
          <h2 class="display-4">Join more than 1 million learners worldwide</h2>
          <p class="lead px-lg-12 mb-6">
            Effective learning starts with assessment. Learning a new skill is
            hard work—Signal makes it easier.
          </p>
          <div class="d-flex align-items-center justify-content-center gap-1">
            <StyledButton variant="primary2">
              Start Learning for Free
            </StyledButton>
            <StyledButton variant="info">Geeks for Business</StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
}
