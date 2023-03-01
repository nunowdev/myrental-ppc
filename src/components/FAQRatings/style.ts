import styled from "styled-components";

export const FAQRatingsContainer = styled.div`
  width: 100%;
  padding: 0 1.3020833333333%;
  @media screen and (max-width: 767px) {
    padding: 0 25px;
  }
`;

export const FAQRatingsWrapper = styled.div`
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 1px;
  border-radius: 5px 75px;
  background-color: #e7ecf1;
  width: 100%;
  height: 161px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 25px 0;
    align-items: center;
  }
`;

export const FAQRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 3%;
  margin-left: 3%;
  .title_1 {
    font-family: "Times New Roman", TimesNewRoman, Times, Baskerville, Georgia,
      serif;
    color: #2f455f;
    font-size: 33px;
    line-height: 33px;
  }
  .title_2 {
    color: #2f455f;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    text-align: center;
  }
  .title_3 {
    color: #2f455f;
    font-size: 21px;
    line-height: 21px;
    font-weight: 700;
  }
  .title_4 {
    font-family: "Times New Roman", TimesNewRoman, Times, Baskerville, Georgia,
      serif;
    color: #2f455f;
    font-size: 16px;
    line-height: 16px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }
  .title_5 {
    font-family: "Times New Roman", TimesNewRoman, Times, Baskerville, Georgia,
      serif;
    color: #2f455f;
    font-size: 15px;
    line-height: 15px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }
  .description {
    color: #2f455f;
    font-size: 13.5px;
    line-height: 21px;
    text-align: center;
  }
  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 767px) {
      margin-bottom: 25px;
    }
    .star {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
  }
`;
