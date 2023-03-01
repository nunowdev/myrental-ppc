import * as React from "react";
import { LocationDescContainer } from "./style";

export default function LocationDesc() {
  return (
    <LocationDescContainer>
      <img
        src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9a373ff41de478289c1ed_hogar%20(1).svg"
        alt=""
      />
      <div className="intro-text">
        Located in the middle of a beautiful landscape our property is waiting
        for you and your family to stay and enjoy a relaxing experience.
      </div>
      <img
        src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9a489ff41de38d789c522_Signa.png"
        className="signature"
        alt=""
      />
    </LocationDescContainer>
  );
}
