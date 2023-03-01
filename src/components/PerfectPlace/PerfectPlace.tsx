import * as React from "react";
import {
  PerfectPlaceContainer,
  PerfectPlaceImages,
  PerfectPlaceText,
} from "./style";

export default function PerfectPlace() {
  return (
    <PerfectPlaceContainer>
      <PerfectPlaceImages>
        <div className="first_image" />
        <div className="second_image" />
      </PerfectPlaceImages>
      <PerfectPlaceText>
        <h1>Find the perfect place to spend a great weekend</h1>
        <div className="underline" />
      </PerfectPlaceText>
    </PerfectPlaceContainer>
  );
}
