import styled from "styled-components";

export const BestDealsContainer = styled.div`
  width: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 75px;
  padding-right: 13%;
  padding-bottom: 75px;
  padding-left: 13%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const BestDealsLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-right: 25px;
  }
  h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #2f455f;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 500;
    width: 346.39px;
  }
  .underline {
    width: 56px;
    height: 4px;
    margin-top: 15px;
    border-radius: 2px;
    background-color: #ff6764;
    margin-bottom: 25px;
  }
  .title {
    display: flex;
    .bullet_point {
      display: inline-block;
      margin-right: 7px;
      color: #ff6764;
      font-size: 18px;
    }
    .text {
      display: inline-block;
      color: #2f455f;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
      @media screen and (max-width: 767px) {
        padding-right: 25px;
        font-size: 16px;
      }
    }
  }
  .description {
    color: #333;
    font-size: 18px;
    width: 418px;
    margin-bottom: 10px;
    margin-left: 15px;
    @media screen and (max-width: 767px) {
      width: auto;
    }
  }
`;

export const BestDealsRight = styled.div`
  width: 50%;
  height: 408px;
  background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988251f61a61a622a404b_r-architecture-T6d96Qrb5MY-unsplash.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 220px;
  }
`;

export const BestDealsTag = styled.div`
  position: absolute;
  bottom: -4%;
  padding: 11px 20px 11px 42px;
  border-style: solid;
  border-width: 4px;
  border-color: #fff;
  border-radius: 25px;
  background-color: #ffbf41;
  background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbb02ba019a291afd55311d_sofa.svg");
  background-position: 10% 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;
