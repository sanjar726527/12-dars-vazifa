import React, { useRef, useState } from "react";
import { Accordion } from "react-bootstrap";

export default function AskedQuestions() {
  const [check, setCheck] = useState(false);
  const ref = useRef(null);
  const toggleCheck = () => {
    setCheck(!check);
  };
  console.log(check);
  console.log(ref);
  return (
    <div className="askedQuestions">
      <div className="container">
        <div className="askedQuestions-title">
          <span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
            Need to Know
          </span>
          <h2 className="mb-2 display-4 fw-bold ">
            Frequently Asked Questions.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
            non accumsan in, tempor dictum neque.
          </p>
        </div>
        <div className="askedQuestions-accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the cost of an online course
              </Accordion.Header>
              <Accordion.Body>
                Create beautiful website with this Geeks UI template. Get
                started building a site today.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What do I need to take a course?
              </Accordion.Header>
              <Accordion.Body>
                Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus
                labore sustainable VHS
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What do I receive for taking this course?
              </Accordion.Header>
              <Accordion.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What willI get if I subscribe to this Certificate?
              </Accordion.Header>
              <Accordion.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="more text-center">
            <a
              className="btn btn-outline-primary"
              href="/marketing/landings/course-lead/"
            >
              More questions? Visit the Learner Help Center.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
