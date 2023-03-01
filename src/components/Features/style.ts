import styled from "styled-components";

export const FeaturesContainer = styled.div`
  width: 100%;
  padding: 0 1.3020833333333%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 75px;
  @media screen and (max-width: 767px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const FeaturesWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 5px 75px;
  background-color: #e9eff4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 724.7px;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: auto;
  }
  .couch {
    width: 39px;
    height: 26.17px;
  }
  h1 {
    margin-top: 18px;
    margin-bottom: 10px;
    color: #2f455f;
    font-size: 28px;
    line-height: 1.4;
    font-weight: 500;
    width: 480px;
    text-align: center;
    @media screen and (max-width: 767px) {
      width: auto;
      font-size: 22px;
    }
  }
  .underline_test {
    width: 56px;
    height: 4px;
    margin-top: 15px;
    border-radius: 2px;
    background-color: #ff6764;
    border: 2px solid red;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;

export const FeaturesMain = styled.div`
  width: 87%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FeaturesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    width: 70%;
  }
  img {
    width: 45px;
    height: 45px;
  }
  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #2f455f;
    font-size: 22px;
    line-height: 1.4;
    font-weight: 500;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
  .underline {
    width: 56px;
    height: 4px;
    margin-top: 15px;
    border-radius: 2px;
    background-color: #ff6764;
  }
  p {
    max-width: 570px;
    margin-top: 20px;
    color: #333;
    font-size: 18px;
    text-align: center;
    @media screen and (max-width: 767px) {
      max-width: auto;
    }
  }
`;
