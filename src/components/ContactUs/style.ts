import styled from "styled-components";

export const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 75px;
  padding-bottom: 75px;
  .subtitle {
    color: #8a8a8a;
    line-height: 20px;
  }
  .title {
    margin-top: 18px;
    margin-bottom: 10px;
    color: #2f455f;
    font-size: 28px;
    line-height: 1.4;
    font-weight: 500;
    @media screen and (max-width: 767px) {
      font-size: 22px;
    }
  }
  .socials {
    display: flex;
    .social_twitter {
      width: 50px;
      height: 50px;
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
      width: 50px;
      height: 50px;
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
`;
