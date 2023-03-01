import * as React from "react";
import {
  DiscoverArrows,
  DiscoverContainer,
  DiscoverContainerBottom,
  DiscoverContainerItem,
  DiscoverContainerTop,
} from "./style";

export default function Discover() {
  return (
    <DiscoverContainer>
      <DiscoverContainerTop>
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc512823b41718d763c3_marcador-de-posicion.svg"
          alt=""
        />
        <h1>Discover our property where you’ll find amazing amenities</h1>
        <div className="underline" />
      </DiscoverContainerTop>
      <DiscoverContainerBottom>
        <DiscoverContainerItem>
          <div className="image bg1">
            <DiscoverArrows>
              <img
                src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a770ed0ddb93cf41a03_flecha-apuntando-a-la-derecha%20(3).svg"
                alt=""
              />
              <img
                src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a77836190085165b1c9_flecha-apuntando-a-la-derecha%20(2).svg"
                alt=""
              />
            </DiscoverArrows>
          </div>
          <div className="text">
            <h1>
              Find several pictures of our <br /> property for rent
            </h1>
            <div className="underline" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate <br /> velit
              esse cillum dolore eu fugiat nulla pariatur <br /> excepteur sint
              occaecat.
            </p>
          </div>
        </DiscoverContainerItem>
        <DiscoverContainerItem>
          <div className="text right">
            <h1>
              Enjoy our property for a <br /> weekend or a longer stay
            </h1>
            <div className="underline" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate <br /> velit
              esse cillum dolore eu fugiat nulla pariatur <br /> excepteur sint
              occaecat.
            </p>
          </div>
          <div className="image bg2">
            <DiscoverArrows className="right">
              <img
                src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a770ed0ddb93cf41a03_flecha-apuntando-a-la-derecha%20(3).svg"
                alt=""
              />
              <img
                src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb99a77836190085165b1c9_flecha-apuntando-a-la-derecha%20(2).svg"
                alt=""
              />
            </DiscoverArrows>
          </div>
        </DiscoverContainerItem>
      </DiscoverContainerBottom>
    </DiscoverContainer>
  );
}
