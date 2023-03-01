import * as React from "react";
import {
  ExploreCenter,
  ExploreContainer,
  ExploreGrid,
  ExploreMain,
  ExploreRight,
} from "./style";

export default function Explore() {
  return (
    <ExploreContainer>
      <ExploreMain>
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988230ed0ddd3bcf3e2c0_Figure.png"
          alt=""
          className="arrow"
        />
        <ExploreCenter>
          <ExploreGrid>
            <div className="grid_column">
              <div className="image1" />
              <div className="image2" />
            </div>
            <div className="grid_column2">
              <div className="image1" />
              <div className="image2" />
            </div>
            <div className="grid_column3">
              <div className="image1" />
            </div>
          </ExploreGrid>
          <ExploreRight>
            <h1>Explore all the activities you can do</h1>
            <div className="underline" />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
            </p>
            <p>
              Quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos dolore.
            </p>
            <div className="reviews">
              <div className="review">
                <div className="icon_box">
                  <img
                    src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc51597797d8316774ce_comprobado.svg"
                    alt=""
                  />
                </div>
                <div className="text">Certified Partner</div>
              </div>
              <div className="review">
                <div className="icon_box">
                  <img
                    src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc5037b139190ec653bb_me-gusta.svg"
                    alt=""
                  />
                </div>
                <div className="text">Best Rated</div>
              </div>
              <div className="review">
                <div className="icon_box">
                  <img
                    src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbafc50a8f88a83f8210d05_usuario.svg"
                    alt=""
                  />
                </div>
                <div className="text">Friendly Host</div>
              </div>
            </div>
          </ExploreRight>
        </ExploreCenter>
      </ExploreMain>
    </ExploreContainer>
  );
}
