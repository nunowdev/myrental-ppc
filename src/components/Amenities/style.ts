import styled from "styled-components";

export const AmenitiesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  border-bottom: 1px solid #bdbdbd;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0 25px;
  }
`;

export const AmenitiesLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 28%;
  padding-left: 1.3020833333333%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  .left_text {
    line-height: 1.4;
    color: #2f455f;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 25px;
    font-weight: 400;
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
    margin-bottom: 20px;
  }
`;

export const AmenitiesBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 23%;
  height: 366px;
  margin-right: 1.5%;
  border-radius: 25px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
  }
  &.bg_1 {
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9881f2823b40badd31a9a_1.jpg");
  }
  &.bg_2 {
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9881f586316bf57bbb4ad_2.jpg");
  }
  &.bg_3 {
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9882093a2e7686522a9f3_3.jpg");
  }
  .arrow_box {
    position: absolute;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    display: flex;
    width: 56.5px;
    height: 56.5px;
    justify-content: center;
    align-items: center;
    border-radius: 25px 0px;
    background-color: #ff6764;
    img {
      width: 23px;
      height: 23px;
    }
  }
  .main_text {
    transition: opacity 200ms ease;
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
  }
`;
