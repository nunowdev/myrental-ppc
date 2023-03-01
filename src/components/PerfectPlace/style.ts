import styled from "styled-components";

export const PerfectPlaceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 75px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const PerfectPlaceImages = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-right: 25px;
  }
  .first_image {
    width: 33%;
    height: 374.5px;
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988258b0fccd21b029361_r-architecture-slpIkPF5BmI-unsplash.jpg");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 4%;
    border-radius: 0px 25px 25px 125px;
    @media screen and (max-width: 767px) {
      height: 157px;
    }
  }
  .second_image {
    width: 63%;
    height: 374.5px;
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988251f61a68ca52a404c_r-architecture-KQgrVfR3r74-unsplash.jpg");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
    @media screen and (max-width: 767px) {
      height: 157px;
    }
  }
`;

export const PerfectPlaceText = styled.div`
  display: flex;
  width: 26%;
  padding-left: 3%;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  flex-direction: column;
  h1 {
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
`;
