import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 100%;
  padding: 0 1.3020833333333%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FAQWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 5px 75px 75px 5px;
  background-color: #e9eff4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
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
  .question_container {
    margin-bottom: 15px;
    padding: 20px 20px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1400px;
    height: 63px;
    @media screen and (max-width: 767px) {
      width: 90%;
    }
    &.first {
      margin-top: 20px;
    }
    .question {
      color: #2f455f;
      font-weight: 500;
      font-size: 18px;
    }
    img {
      height: 8.44px;
      width: 15px;
      transform: rotate(calc(90 * 3deg));
    }
  }
`;

export const VisitButton = styled.button`
  min-height: 40px;
  min-width: 120px;
  padding: 13px 22px 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #2f455f;
  border-radius: 25px;
  background-color: transparent;
  transition: color 200ms ease, background-color 200ms ease;
  color: #2f455f;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.3px;
  :hover {
    background-color: #2f455f;
    color: #fff;
  }
`;
