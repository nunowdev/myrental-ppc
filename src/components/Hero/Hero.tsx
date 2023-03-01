import * as React from "react";
import { HeroContainer, HeroInputs, HeroLeft, HeroRight } from "./style";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroLeft>
        <div className="subtitle">My Rental</div>
        <div className="title">Welcome to your next rental house</div>
        <div className="subtitle">
          MyRental is a Webflow Template to showcase your short or long term
          rental properties!
        </div>
        <HeroInputs>
          <input type="text" className="name_input" placeholder="Name" />
          <input type="text" className="email_input" placeholder="Email" />
          <button className="inputs_button">Join!</button>
        </HeroInputs>
      </HeroLeft>
      <HeroRight>
        <div className="arrows">
          <img
            className="arrow"
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a770ed0ddb93cf41a03_flecha-apuntando-a-la-derecha%20(3).svg"
            alt=""
          />
          <img
            className="arrow"
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a77836190085165b1c9_flecha-apuntando-a-la-derecha%20(2).svg"
            alt=""
          />
        </div>
      </HeroRight>
    </HeroContainer>
  );
}
