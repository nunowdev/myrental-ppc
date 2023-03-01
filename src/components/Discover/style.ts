import styled from "styled-components";

export const DiscoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 75px;
  @media screen and (max-width: 767px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const DiscoverContainerTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 25px;
  img {
    width: 39px;
    height: 39px;
  }
  h1 {
    margin-top: 18px;
    margin-bottom: 10px;
    color: #2f455f;
    font-size: 28px;
    line-height: 1.4;
    font-weight: 500;
    text-align: center;
    @media screen and (max-width: 767px) {
      font-size: 22px;
      padding-right: 25px;
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

export const DiscoverContainerBottom = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 75px;
`;

export const DiscoverContainerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  .image {
    &.bg1 {
      justify-content: flex-end;
      border-radius: 0px 25px 25px 0px;

      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9882037b13900ebc2796f_im3rd-media-f888opoBHUo-unsplash.jpg");
      @media screen and (max-width: 767px) {
        margin-right: 25px;
      }
    }
    &.bg2 {
      justify-content: flex-start;
      border-radius: 25px 0px 0px 25px;
      @media screen and (max-width: 767px) {
        margin-left: 25px;
      }
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988258b0fccd21b029361_r-architecture-slpIkPF5BmI-unsplash.jpg");
    }
    width: 50%;
    min-height: 365px;
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9882037b13900ebc2796f_im3rd-media-f888opoBHUo-unsplash.jpg");
  }
  .text {
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-right: 5%;
    padding-left: 5%;
    flex-direction: column;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    &.right {
      padding-left: 270px;
      @media screen and (max-width: 767px) {
        padding-left: 25px;
        margin-top: 20px;
      }
    }

    h1 {
      margin-top: 20px;
      margin-bottom: 10px;
      color: #2f455f;
      font-size: 26px;
      line-height: 1.4;
      font-weight: 500;
      font-size: 22px;
    }
    .underline {
      width: 56px;
      height: 4px;

      border-radius: 2px;
      background-color: #ff6764;
    }
    p {
      margin-top: 20px;
      color: #333;
      font-size: 18px;
      @media screen and (max-width: 767px) {
        margin-bottom: 25px;
      }
    }
  }
`;

export const DiscoverArrows = styled.div`
  width: 48px;
  height: 84px;
  border-radius: 25px 0px 0px;
  background-color: #ff6764;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 25px 0px 25px 0px;
  &.right {
    border-radius: 0px 25px 0px 25px;
  }
  img {
    width: 20px;
    height: 20px;
    margin: 7px 0px;
  }
`;
