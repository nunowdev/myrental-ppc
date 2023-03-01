import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  border-radius: 0px 75px;
  background-color: #2f455f;
  height: 517.09px;
  padding: 0 25px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 30px;
  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  .flex {
    display: flex;
  }
  .main_info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 31%;
    margin-right: 150px;
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 30px;
    }
    img {
      width: 34.5px;
      height: 34.5px;
      margin-bottom: 20px;
    }
    h1 {
      color: #fff;
      font-size: 20px;
      line-height: 32px;
      font-weight: 400;
      max-width: 520px;
      margin-bottom: 20px;
    }
    p {
      font-size: 15px;
      line-height: 28px;
      font-weight: 400;
      color: #fff;
      margin-bottom: 20px;
    }
    .socials {
      display: flex;
      .social_twitter {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        border-radius: 50%;
        transition: background-color 200ms ease;
        background-position: 50% 50%;
        background-size: 20px;
        background-repeat: no-repeat;
        background-color: #1da1f2;
        background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbbf6d429d3b71a37359b34_gorjeo.svg");
      }
      .social {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        border-radius: 50%;
        transition: background-color 200ms ease;
        background-position: 50% 50%;
        background-size: 20px;
        background-repeat: no-repeat;
        &.facebook {
          background-color: #067aeb;
          background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb94e2779548620e06756dd_logo-de-facebook%20(1).svg");
        }
        &.twitter {
          background-color: #1da1f2;
          background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbbf6d429d3b71a37359b34_gorjeo.svg");
        }
        &.instagram {
          background-color: #ff7e4f;
          background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb94e277954866fc66756d9_instagram.svg");
        }
        &.email {
          background-color: #9137ee;
          background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb94e3b5f4c87b81ccfeaa9_email%20(1).svg");
        }
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  p {
    font-size: 13px;
    line-height: 21px;
    color: #fff;
    span {
      font-size: 13px;
      color: #067aeb;
      text-decoration: underline;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-right: 300px;
  @media screen and (max-width: 767px) {
    margin-right: 100px;
  }

  h1 {
    color: #fff;
    font-size: 17px;
    font-weight: 500;
  }
  h2 {
    color: #fff;
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    margin-top: 20px;
    white-space: nowrap;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 26px;
    }

    &.home {
      color: #ff6764;
    }
  }
`;

export const Newsletter = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 60px;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-top: 30px;
    width: 100%;
    max-width: 250px;
    margin-bottom: 30px;
  }
  h1 {
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .footer_image {
    border-top-left-radius: 12.5px;
    border-top-right-radius: 12.5px;
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9882037b13900ebc2796f_im3rd-media-f888opoBHUo-unsplash.jpg");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 320px;
    height: 132px;
  }
  .footer_input {
    width: 100%;
    height: 48.5px;
    margin-bottom: 0px;
    padding-left: 17px;
    border: 1px none #000;
    border-radius: 0px;
    background-color: #fff;
    -webkit-transition: border-color 200ms ease;
    transition: border-color 200ms ease;
    color: #9b9b9b;
    text-align: center;
    max-width: 320px;
    :focus {
      outline: none;
    }
    ::placeholder {
      font-size: 13px;
    }
  }
  .subscribe {
    width: 100%;
    max-width: 320px;
    height: 48.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff6764;
    border-bottom-left-radius: 12.5px;
    border-bottom-right-radius: 12.5px;
    h1 {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 0;
    }
  }
`;
