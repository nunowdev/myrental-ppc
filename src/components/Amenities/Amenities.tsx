import * as React from "react";
import { AmenitiesBox, AmenitiesContainer, AmenitiesLeft } from "./style";

export default function Amenities() {
  return (
    <AmenitiesContainer>
      <AmenitiesLeft>
        <div className="left_text">
          Discover our property where you’ll find amazing amenities
        </div>
        <div className="underline" />
      </AmenitiesLeft>
      <AmenitiesBox className="bg_1">
        <div className="arrow_box">
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a77836190085165b1c9_flecha-apuntando-a-la-derecha%20(2).svg"
            alt=""
          />
        </div>
      </AmenitiesBox>
      <AmenitiesBox className="bg_2">
        <div className="arrow_box">
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a77836190085165b1c9_flecha-apuntando-a-la-derecha%20(2).svg"
            alt=""
          />
        </div>
      </AmenitiesBox>
      <AmenitiesBox className="bg_3">
        <div className="arrow_box">
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a77836190085165b1c9_flecha-apuntando-a-la-derecha%20(2).svg"
            alt=""
          />
        </div>
        <div className="main_text">Kitchen</div>
      </AmenitiesBox>
    </AmenitiesContainer>
  );
}
