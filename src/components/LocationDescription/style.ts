import styled from "styled-components";

export const LocationDescContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 75px;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    padding: 0 25px;
  }
  img {
    width: 39px;
    height: 39px;
  }
  .intro-text {
    color: #2f455f;
    font-size: 22.5px;
    text-align: center;
    width: 480px;
    margin-top: 15px;
    @media screen and (max-width: 767px) {
      font-size: 20px;
      padding: 0 75px;
    }
  }
  .signature {
    width: 269px;
    height: 35.5px;
    margin-top: 15px;
  }
`;
