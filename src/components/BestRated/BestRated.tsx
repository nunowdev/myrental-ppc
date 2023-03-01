import * as React from "react";
import {
  BestRatedCertified,
  BestRatedContainer,
  BestRatedContent,
  BestRatedContentWrapper,
  BestRatedImageContainer,
} from "./style";

export default function BestRated() {
  return (
    <BestRatedContainer>
      <BestRatedImageContainer>
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9881fb49cf83b0b4a8ed7_4.jpg"
          alt=""
        />
        <BestRatedCertified>
          <img
            src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafb9e9c6db4382b4171a9_comprobado%20(1).svg"
            alt=""
          />
          <p>Certified Partner</p>
        </BestRatedCertified>
      </BestRatedImageContainer>
      <BestRatedContent>
        <BestRatedContentWrapper>
          <h1>Best rated host on popular rental sites</h1>
          <div className="underline" />
          <div className="first_text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
          </div>
          <div className="first_text">
            Quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos dolore.
          </div>
          <div className="ratings">
            <div className="rating_box">
              <div className="icon_container">
                <img
                  src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc518fe3b2d97b2631bf_proteger.svg"
                  alt=""
                />
              </div>
              <div className="text_container">100% Ratings</div>
            </div>
            <div className="rating_box">
              <div className="icon_container">
                <img
                  src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc51558fb6ff206f3948_editar.svg"
                  alt=""
                />
              </div>
              <div className="text_container">Best Rated</div>
            </div>
          </div>
          <div className="first_text first_text_margin">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </div>
        </BestRatedContentWrapper>
      </BestRatedContent>
    </BestRatedContainer>
  );
}
