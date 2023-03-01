import * as React from "react";
import {
  FeaturesContainer,
  FeaturesItem,
  FeaturesMain,
  FeaturesWrapper,
} from "./style";

export default function Features() {
  return (
    <FeaturesContainer>
      <FeaturesWrapper>
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988215863167f11bbb4af_Sillon%20(1).png"
          alt=""
          className="couch"
        />
        <h1>Discover our property where you’ll find amazing amenities</h1>
        <div className="underline_test" />
        <FeaturesMain>
          <FeaturesItem>
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc508fe3b25ff52631be_corazon.svg"
              alt=""
            />
            <h1>Friendly host</h1>
            <div className="underline" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </FeaturesItem>
          <FeaturesItem>
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc50586316229dbf9dea_charla.svg"
              alt=""
            />
            <h1>Fast support</h1>
            <div className="underline" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </FeaturesItem>
          <FeaturesItem>
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc51558fb6ff206f3948_editar.svg"
              alt=""
            />
            <h1>Great Perks</h1>
            <div className="underline" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </FeaturesItem>
          <FeaturesItem>
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc50d2fdf11f52d11038_planeta-tierra.svg"
              alt=""
            />
            <h1>World Class</h1>
            <div className="underline" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </FeaturesItem>
        </FeaturesMain>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
}
