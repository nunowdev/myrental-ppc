import styled from "styled-components";

export const ExploreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ExploreMain = styled.div`
  width: calc(100% - 6%);
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 0px 75px 75px 0px;
  background-color: #2f455f;
  height: 639.06px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 767px) {
    height: auto;
  }
  .arrow {
    position: absolute;
    width: 86px;
    top: 150px;
    right: 0px;
  }
`;

export const ExploreCenter = styled.div`
  width: 1088px;
  max-width: 1088px;
  height: 519.06px;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ExploreGrid = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: 20px;
  }
  .grid_column {
    display: flex;
    width: 33%;
    margin-right: 2%;
    flex-direction: column;
    justify-content: center;
    .image1 {
      width: 100%;
      height: 210px;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98820a8f88aca4c1cf6f7_8.jpg");
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 25px;
      margin-bottom: 10px;
      @media screen and (max-width: 767px) {
        height: 258.44px;
      }
    }
    .image2 {
      width: 100%;
      height: 262px;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98821faee58adbc3b6ddd_9.jpg");
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 25px;
      @media screen and (max-width: 767px) {
        height: 323px;
      }
    }
  }
  .grid_column2 {
    display: flex;
    width: 33%;
    margin-top: 6%;
    margin-right: 2%;
    flex-direction: column;
    justify-content: center;
    .image1 {
      width: 100%;
      height: 233px;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98821e5e1d8578e736be3_10.jpg");
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 25px;
      margin-bottom: 10px;
      @media screen and (max-width: 767px) {
        height: 268px;
      }
    }
    .image2 {
      width: 100%;
      height: 233px;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98821741e70c6df1254b8_11%20(1).jpg");
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 25px;
    }
    .image3 {
      width: 100%;
      height: 233px;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98821e5e1d8578e736be3_10.jpg");
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 25px;
      margin-bottom: 10px;
    }
  }
  .grid_column3 {
    display: flex;
    width: 33%;
    margin-top: 6%;
    margin-right: 2%;
    flex-direction: column;
    justify-content: center;
    .image1 {
      width: 100%;
      height: 209px;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98821d6eff22bd525bda0_12%20(1).jpg");
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 25px;
      margin-bottom: 10px;
    }
  }
`;

export const ExploreRight = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: 20px;
  }
  h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 500;
    width: 346px;
    @media screen and (max-width: 767px) {
      font-size: 20px;
      width: 100%;
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
    font-size: 18px;
    color: #fff;
    margin-top: 20px;
    width: 433px;
    @media screen and (max-width: 767px) {
      font-size: 16px;
      width: 100%;

      padding-right: 20px;
    }
  }
  .reviews {
    display: flex;
    align-items: center;
    justify-content: center;
    .review {
      display: flex;
      width: 93.25px;
      margin-right: 4%;
      flex-direction: column;
      border-style: solid;
      border-width: 1px;
      border-color: #fff;
      border-radius: 10px;
      text-align: center;
      margin-top: 25px;
      @media screen and (max-width: 767px) {
        width: 95px;
      }
      .icon_box {
        display: flex;
        width: 100%;
        height: 50px;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #fff;
        img {
          width: 25px;
          height: 25px;
        }
      }
      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        font-size: 13px;
        line-height: 16px;
        flex: 1;
        color: #fff;
      }
    }
  }
`;
