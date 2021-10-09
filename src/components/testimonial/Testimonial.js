import React from "react";
import styled from "styled-components";
import { bp } from "../../config";

const Testimonial = () => {
  return (
    <Wrapper>
      <div className="test__box">
        <p className="test__box-review">
          "Great to work with, once again! He even improved our already
          established website and made it more interactive on top of what we
          requested for the gig. He is always responsive and basically part of
          the team. We would recommend to anyone."
        </p>
        <div className="test__box-user">cavortmedia555, USA</div>
      </div>
      <div className="test__box main-box">
        <p className="test__box-review">
          "Working with this seller was a truly amazing experience. After
          searching through many sellers on Fiverr, this seller was the only one
          to contact me back and spend the time to even see if my project was
          possible. After he concluded it was possible, he had everything done
          in a matter of days. He was also very transparent about what was
          feasible and what wasn't. I would highly recommend him to anyone –
          especially those struggling to find a seller with great communication
          and dedication to his work and his customers."
        </p>
        <div className="test__box-user">ecamediapub, USA</div>
      </div>
      <div className="test__box">
        <p className="test__box-review">
          "Excellent service and work with patient! Is really happy to work with
          him! Is good that he keep updating on the progress, showing the result
          based on requirements with expectation! Really recommended and will
          work with him again in the future!"
        </p>
        <div className="test__box-user">tommyc241, Malaysia</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  gap: 0.5rem;

  .test__box {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    font-size: 1.4rem;
    background-color: #f8f9fa;
    width: 30%;
    text-align: justify;
    font-weight: 500;
  }

  .main-box {
    font-size: 1.5rem;
    width: 40%;
  }
  .test__box-user {
    font-family: "Courier Prime", monospace;
    font-weight: bold;
  }

  .test__box-review {
  }

  @media ${bp.laptop} {
    flex-direction: column;

    .test__box {
      width: 100%;
    }
  }
`;

export default Testimonial;
