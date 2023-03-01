import styled from "styled-components";

export const StayUpdatedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 1.3020833333333%;
  padding-bottom: 75px;
  @media screen and (max-width: 767px) {
    padding: 0 25px;
  }
  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #2f455f;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 500;
    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
  }
  .underline {
    width: 56px;
    height: 4px;
    margin-top: 15px;
    border-radius: 2px;
    background-color: #ff6764;
  }
  .flex {
    display: flex;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`;

export const Update = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 574px;
  margin-right: 2%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 325px;
    margin-top: 30px;
    margin-bottom: 15px;
    border-radius: 25px;
  }
  .tag {
    display: inline-block;
    padding: 6px 9px 5px;
    border-radius: 20px;
    transition: opacity 200ms ease;
    font-size: 8px;
    line-height: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: none;
    text-transform: uppercase;
    &.rentals {
      background-color: #e5e2fa;
      color: #847bd5;
    }
    &.holidays {
      background-color: #e9eff4;
      color: #407ca1;
    }
    &.airbnb {
      background-color: #d1e7e3;
      color: #249681;
    }
  }
  h1 {
    display: inline-block;
    margin-top: 13px;
    color: #2f455f;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
  }
  p {
    margin-bottom: 10px;
    color: #333;
    letter-spacing: 0px;
    font-size: 14px;
    margin-top: 10px;
  }
`;
