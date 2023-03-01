import * as React from "react";
import { FAQContainer, FAQWrapper, VisitButton } from "./style";

export default function FAQ() {
  return (
    <FAQContainer>
      <FAQWrapper>
        <div className="subtitle">Pricing</div>
        <div className="title">Frequently Asked Questions</div>

        <div className="question_container first">
          <div className="question">Where is the property located ?</div>
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988231f61a67e202a4049_Arrow.png"
            alt=""
          />
        </div>
        <div className="question_container">
          <div className="question">How many people can be accomodated?</div>
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988231f61a67e202a4049_Arrow.png"
            alt=""
          />
        </div>
        <div className="question_container">
          <div className="question">How far from downtown is the property?</div>
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988231f61a67e202a4049_Arrow.png"
            alt=""
          />
        </div>
        <div className="question_container">
          <div className="question">Breakfast is included?</div>
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988231f61a67e202a4049_Arrow.png"
            alt=""
          />
        </div>

        <div className="question_container">
          <div className="question">
            Where can we find reviews of the property?
          </div>
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988231f61a67e202a4049_Arrow.png"
            alt=""
          />
        </div>
        <div className="question_container">
          <div className="question">There are additional fees?</div>
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988231f61a67e202a4049_Arrow.png"
            alt=""
          />
        </div>
        <VisitButton>Visit Faq</VisitButton>
      </FAQWrapper>
    </FAQContainer>
  );
}
