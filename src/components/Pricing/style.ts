import styled from "styled-components";

export const PricingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 60px;
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
  }
`;

export const Prices = styled.div`
  width: 100%;
  padding: 0 1.3020833333333%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0 25px;
  }
`;

export const Price = styled.div`
  width: 31%;
  margin-right: 3%;
  border-style: none solid solid;
  border-width: 1px;
  border-color: #bdbdbd;
  border-radius: 12.5px;
  background-color: #fff;
  height: 579px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 50px;
  }
  .heading {
    padding: 20px 2% 10px;
    border-top: 6px solid #ff6764;
    border-bottom: 1px solid #bdbdbd;
    border-top-left-radius: 12.5px;
    border-top-right-radius: 12.5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &.yellow {
      border-top: 6px solid #ffbf41;
    }
    &.blue {
      border-top: 6px solid #3b72b4;
    }

    img {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }
    .price_tag {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      .dollar {
        display: inline-block;
        margin-right: 3px;
        color: #ff6764;
        font-size: 25px;
        font-weight: 500;
        &.yellow {
          color: #ffbf41;
        }
        &.blue {
          color: #3b72b4;
        }
      }
      .value {
        display: inline-block;
        margin-right: 3px;
        color: #ff6764;
        font-size: 45px;
        font-weight: 600;
        &.yellow {
          color: #ffbf41;
        }
        &.blue {
          color: #3b72b4;
        }
      }
      .perday {
        display: inline-block;
        margin-right: 3px;
        color: #9b9b9b;
      }
    }
  }
`;

export const PricingDetails = styled.div`
  padding-top: 20px;
  padding-right: 5%;
  padding-left: 5%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding-right: 25px;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .flex {
      display: flex;
    }
    .checkmark {
      width: 15px;
      height: 15px;
      margin-top: 4px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: #73cf11;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbbe6c4d2d387248f58cffb_cheque.svg");
      background-position: 50% 50%;
      background-size: 7px;
      background-repeat: no-repeat;
    }
    .not_included {
      min-width: 15px;
      height: 15px;
      margin-top: 4px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: #bdbdbd;
      background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fbbe93e868dd2da2a24d193_eliminar.svg");
      background-position: 50% 50%;
      background-size: 7px;
      background-repeat: no-repeat;
    }
    .price_title {
      display: inline-block;
      color: #2f455f;
      font-size: 18px;
      font-weight: 500;
      white-space: nowrap;
      @media screen and (max-width: 767px) {
        font-size: 16px;
      }
    }
    .plus_sign {
      display: flex;
      height: 28px;
      margin-left: 10px;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      position: relative;
      .bar_horizontal {
        position: absolute;
        width: 14px;
        height: 2px;
        background-color: #ff6764;

        &.blue {
          background-color: #3b72b4;
        }
        &.yellow {
          background-color: #ffbf41;
        }
      }
      .bar_vertical {
        position: absolute;
        width: 2px;
        height: 14px;
        background-color: #ff6764;
        &.blue {
          background-color: #3b72b4;
        }
        &.yellow {
          background-color: #ffbf41;
        }
      }
    }
  }
  .bottom {
    margin-bottom: 10px;
    color: #9b9b9b;
    letter-spacing: 0px;
    margin-left: 25px;
    font-size: 14px;
  }
`;

export const ButtonBox = styled.div`
  padding: 20px 25px;
  text-align: center;
  button {
    width: 100%;
    min-height: 40px;
    min-width: 120px;
    margin-right: 0px;
    margin-left: 0px;
    padding: 13px 25px 10px;
    border-style: solid;
    border-width: 1px;
    border-color: #ff6764;
    border-radius: 2px;
    background-color: #ff6764;
    transition: color 200ms ease, background-color 200ms ease, border 200ms ease;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    text-align: center;
    &.blue {
      background-color: #3b72b4;
      border-color: #3b72b4;
      :hover {
        color: #3b72b4;
      }
    }
    &.yellow {
      background-color: #ffbf41;
      border-color: #ffbf41;
      :hover {
        color: #ffbf41;
      }
    }
    :hover {
      background-color: transparent;
      color: #ff6764;
    }
  }
`;
