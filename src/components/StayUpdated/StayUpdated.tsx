import * as React from "react";
import { StayUpdatedContainer, Update } from "./style";

export default function StayUpdated() {
  return (
    <StayUpdatedContainer>
      <h2>Stay Updated</h2>
      <div className="underline" />
      <div className="flex">
        <Update>
          <img
            src="https://assets.website-files.com/5fbbf7da7e4d4aa5761665ce/5fbc15136d10099952d5b764_kam-idris-Ot2iTXgC6fY-unsplash%20(1).jpg"
            alt=""
          />
          <div className="tag rentals">RENTALS</div>
          <h1>We Are Launching MyRental CMS Webflow Template This Week!</h1>
          <p>
            My Rental is a beautiful designed Business Webflow CMS Template.
          </p>
        </Update>
        <Update>
          <img
            src="https://assets.website-files.com/5fbbf7da7e4d4aa5761665ce/5fbc15218078bd20a474e4e4_kam-idris-_HqHX3LBN18-unsplash.jpg"
            alt=""
          />
          <div className="tag holidays">HOLIDAYS</div>
          <h1>5 Things To See When You Buy Your First Rental Property</h1>
          <p>
            My Rental is a beautiful designed Business Webflow CMS Template.
          </p>
        </Update>
        <Update>
          <img
            src="https://assets.website-files.com/5fbbf7da7e4d4aa5761665ce/5fbc1189b84e9e0fd539d884_kam-idris-kyt0PkBSCNQ-unsplash%20(1).jpg"
            alt=""
          />
          <div className="tag airbnb">AIRBNB</div>
          <h1>Rental Friendly Practices For Your Guests</h1>
          <p>
            My Rental is a beautiful designed Business Webflow CMS Template.
          </p>
        </Update>
      </div>
    </StayUpdatedContainer>
  );
}
