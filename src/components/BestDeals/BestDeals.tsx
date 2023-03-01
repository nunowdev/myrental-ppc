import * as React from "react";
import {
  BestDealsContainer,
  BestDealsLeft,
  BestDealsRight,
  BestDealsTag,
} from "./style";

export default function BestDeals() {
  return (
    <BestDealsContainer>
      <BestDealsLeft>
        <h1>Rated as best clean and minimalistic rental on town</h1>
        <div className="underline" />
        <div className="title">
          <div className="bullet_point">•</div>
          <div className="text">Find excellent deals</div>
        </div>
        <div className="description">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla.
        </div>
        <div className="title">
          <div className="bullet_point">•</div>
          <div className="text">Prompt service</div>
        </div>
        <div className="description">
          Duis aute irure dolor in reprehenderita in voluptate velit esse cillum
          dolore eu fugiat nulla.
        </div>
      </BestDealsLeft>
      <BestDealsRight>
        <BestDealsTag>Spacious Areas</BestDealsTag>
      </BestDealsRight>
    </BestDealsContainer>
  );
}
