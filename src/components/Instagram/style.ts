import styled from "styled-components";

export const InstagramContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.3020833333333%;
  padding-bottom: 75px;
  @media screen and (max-width: 767px) {
    padding: 75px 25px;
  }
  .subtitle {
    color: #8a8a8a;
    line-height: 20px;
  }
  .title {
    margin-top: 18px;
    margin-bottom: 30px;
    color: #2f455f;
    font-size: 28px;
    line-height: 1.4;
    font-weight: 500;
  }
  .instagram_posts {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .post {
      width: 25%;
      @media screen and (max-width: 767px) {
        width: 50%;
        height: 170px;
      }
      height: 382px;
      border-radius: 0px 0px 0px 0px;
      &.first {
        border-radius: 2.5px 0px 0px 75px;
        @media screen and (max-width: 767px) {
          border-radius: 0px;
        }
      }
      &.first_mobile {
        border-radius: 0px 75px 2.5px 0px;
      }
      &.last {
        border-radius: 0px 75px 2.5px 0px;
        @media screen and (max-width: 767px) {
          border-radius: 0px;
        }
      }
      &.last_mobile {
        border-radius: 2.5px 0px 0px 75px;
      }
    }
  }
`;
