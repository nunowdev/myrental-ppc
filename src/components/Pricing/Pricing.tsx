import * as React from "react";
import {
  ButtonBox,
  Price,
  Prices,
  PricingContainer,
  PricingDetails,
} from "./style";

export default function Pricing() {
  return (
    <PricingContainer>
      <div className="subtitle">Pricing</div>
      <div className="title">Simple and plain pricing</div>
      <Prices>
        <Price>
          <div className="heading">
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbbe65df6e0e354077260ca_perilla-de-la-puerta%20(3).svg"
              alt=""
            />
            <div className="price_tag">
              <div className="dollar">$</div>
              <div className="value">49</div>
              <div className="perday">Per day</div>
            </div>
          </div>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Welcome Package</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal"></div>
                <div className="bar_vertical"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Cleaning Included</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal"></div>
                <div className="bar_vertical"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="not_included"></div>
                <div className="price_title">Shuttle to downtown</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal"></div>
                <div className="bar_vertical "></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="not_included"></div>
                <div className="price_title">Food and Drinks</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal"></div>
                <div className="bar_vertical"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <ButtonBox>
            <button>Book now—</button>
          </ButtonBox>
        </Price>
        <Price>
          <div className="heading yellow">
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc50ec0945892591fa14_brujula.svg"
              alt=""
            />
            <div className="price_tag">
              <div className="dollar yellow">$</div>
              <div className="value yellow">49</div>
              <div className="perday">Per day</div>
            </div>
          </div>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Welcome Package</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal yellow"></div>
                <div className="bar_vertical yellow"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Cleaning Included</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal yellow"></div>
                <div className="bar_vertical yellow"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Shuttle to downtown</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal yellow"></div>
                <div className="bar_vertical yellow"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="not_included"></div>
                <div className="price_title">Food and Drinks</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal yellow"></div>
                <div className="bar_vertical yellow"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <ButtonBox>
            <button className="yellow">Book now—</button>
          </ButtonBox>
        </Price>
        <Price>
          <div className="heading blue">
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc50431df936cd33f41c_pasaporte.svg"
              alt=""
            />
            <div className="price_tag">
              <div className="dollar blue">$</div>
              <div className="value blue">49</div>
              <div className="perday">Per day</div>
            </div>
          </div>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Welcome Package</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal blue"></div>
                <div className="bar_vertical blue"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Cleaning Included</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal blue"></div>
                <div className="bar_vertical blue"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Shuttle to downtown</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal blue"></div>
                <div className="bar_vertical blue"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <PricingDetails>
            <div className="top">
              <div className="flex">
                <div className="checkmark"></div>
                <div className="price_title">Food and Drinks</div>
              </div>
              <div className="plus_sign">
                <div className="bar_horizontal blue"></div>
                <div className="bar_vertical blue"></div>
              </div>
            </div>
            <div className="bottom">All amenities included in package</div>
          </PricingDetails>
          <ButtonBox>
            <button className="blue">Book now—</button>
          </ButtonBox>
        </Price>
      </Prices>
    </PricingContainer>
  );
}
