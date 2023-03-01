import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 685px;
  border-bottom-left-radius: 125px;
  background-color: #2f455f;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding-top: 45px;
  }
`;

export const HeroLeft = styled.div`
  width: 45%;
  padding: 40px 5%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-top: 100px;
    border-bottom-left-radius: 0px;
    padding: 40px 8%;
  }
  .subtitle {
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 0.5px;
    color: #fff;
  }

  .title {
    color: #fff;
    font-size: 38px;
    margin-top: 18px;
    margin-bottom: 10px;
    line-height: 1.4;
    font-weight: 500;
    @media screen and (max-width: 767px) {
      font-size: 32px;
    }
  }
`;

export const HeroRight = styled.div`
  width: 100%;
  min-height: 685px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98827d6eff2587d25bda7_r-architecture-2gDwlIim3Uw-unsplash.jpg");
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media screen and (max-width: 767px) {
    min-height: 300px;
  }
  .arrows {
    width: 104px;
    height: 48px;
    border-top-right-radius: 2.5px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 2.5px;
    background-color: #ff6764;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    .arrow {
      width: 23px;
      height: 23px;
    }
  }
`;

export const HeroInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
  .name_input {
    width: 50%;
    height: 60px;
    margin-bottom: 0px;
    padding-left: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #fff;
    border-radius: 5px 0px 0px 5px;
    background-color: #fff;
    -webkit-transition: border-color 200ms ease;
    transition: border-color 200ms ease;
    outline: none;
    @media screen and (max-width: 767px) {
      width: 100%;
      border-radius: 5px 5px 0px 0px;
    }
  }
  .email_input {
    width: 50%;
    height: 60px;
    margin-bottom: 0px;
    padding-left: 15px;
    border-style: none none none solid;
    border-width: 1px;
    border-color: #000 #000 #000 #bdbdbd;
    border-radius: 0px;
    background-color: #fff;
    -webkit-transition: border-color 200ms ease;
    transition: border-color 200ms ease;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .inputs_button {
    height: 60px;
    min-width: 140px;
    padding-right: 5%;
    padding-left: 5%;
    border-radius: 0px 5px 5px 0px;
    background-color: #ff6764;
    -webkit-transition: opacity 200ms ease;
    transition: opacity 200ms ease;
    font-weight: 500;
    outline: none;
    border: none;

    color: #fff;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: -0.5px;
    @media screen and (max-width: 767px) {
      width: 100%;
      height: 50px;
    }
  }
`;
