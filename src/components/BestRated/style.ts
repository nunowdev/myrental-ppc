import styled from "styled-components";

export const BestRatedContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 60px;
  padding-bottom: 30px;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const BestRatedImageContainer = styled.div`
  display: flex;
  width: 50%;
  margin-right: 5%;
  margin-left: 5%;
  justify-content: center;
  height: 530px;
  align-items: center;
  position: relative;
  border-radius: 25px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  img {
    width: 427.5px;
    border-radius: 25px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const BestRatedCertified = styled.div`
  position: absolute;
  width: 172.22px;
  height: 48.19px;
  background-color: #ffbf41;
  padding: 0 18px;
  border-style: solid;
  border-width: 4px;
  border-color: #fff;
  border-radius: 25px;
  bottom: -15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    bottom: 20px;
  }
  img {
    width: 22px;
    height: 22px;
  }
  p {
    color: #fff;
    font-size: 14px;
    white-space: nowrap;
  }
`;

export const BestRatedContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const BestRatedContentWrapper = styled.div`
  width: 100%;
  max-width: 433px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  h1 {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #2f455f;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 500;
  }
  .underline {
    width: 56px;
    height: 4px;
    margin-top: 15px;
    border-radius: 2px;
    background-color: #ff6764;
    margin-bottom: 18px;
  }
  .first_text {
    color: #333;
    font-size: 18px;
    margin-bottom: 10px;
    letter-spacing: 0px;
  }
  .first_text_margin {
    margin-top: 15px;
  }
  .ratings {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    .rating_box {
      display: flex;
      max-width: 143px;
      margin-right: 3%;
      border-style: solid;
      border-width: 1px;
      border-color: #bdbdbd;
      border-radius: 10px;
      text-align: left;
      width: 137.78px;
      height: 64px;
      @media screen and (max-width: 767px) {
        flex-direction: column;
        width: 80px;

        height: 124px;
      }
      .icon_container {
        display: flex;
        width: 60px;
        padding-right: 14px;
        padding-left: 14px;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #bdbdbd;
        @media screen and (max-width: 767px) {
          width: 80px;
          height: 60px;
          padding-top: 13px;
          padding-bottom: 13px;
          border-bottom: 1px solid #bdbdbd;
          border-right-style: none;
          text-align: center;
        }
        img {
          width: 100%;
          height: 100%;
          @media screen and (max-width: 767px) {
          }
        }
      }
      .text_container {
        padding: 5px 15px;
        flex: 1;
        color: #2f455f;
        margin-top: 10px;
        font-size: 13px;
      }
    }
  }
`;
