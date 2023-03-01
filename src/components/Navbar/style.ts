import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 25px;
  background-color: #2a3e56;
  border-bottom-left-radius: 12.5px;
  border-bottom-right-radius: 12.5px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    position: fixed;
    height: 75px;
    top: 0;
    width: 340px;
    z-index: 500;
  }
  .hamburguer {
    width: 24px;
    height: 24px;
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
    }
  }
  img {
    width: 33.14px;
    height: 33.14px;
    cursor: pointer;
  }
`;

export const NavbarNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: none;
  }

  .nav_link {
    color: #fff;
    font-size: 15px;
    line-height: 27px;
    font-weight: 500;
    margin-right: 13px;

    padding-right: 6px;
    cursor: pointer;
    padding-left: 6px;
  }
  .nav_link_red {
    color: #ff6764;
    font-size: 15px;
    line-height: 27px;
    margin-right: 13px;

    padding-right: 6px;
    padding-left: 6px;
    font-weight: 500;
    cursor: pointer;
  }
  .nav_link_mail {
    overflow: hidden;
    width: 60px;
    height: 70px;
    margin-right: 15px;
    cursor: pointer;
    padding-right: 7px;
    padding-left: 7px;
    background-image: url("https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9881e0208df26ca9d4bb3_Email.png");
    background-position: 50% 50%;
    background-size: 20px;
    background-repeat: no-repeat;
    -webkit-transition: opacity 200ms ease;
    transition: opacity 200ms ease;

    color: #000;
    font-size: 15px;
    line-height: 27px;
    font-weight: 500;
    text-decoration: none;
  }
  .nav_button {
    display: flex;
    height: 70px;

    padding-right: 27px;
    padding-left: 27px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-top-left-radius: 12.5px;
    border-bottom-left-radius: 12.5px;
    border-bottom-right-radius: 12.5px;
    background-color: #ff6764;
    -webkit-transition: background-color 200ms ease;
    transition: background-color 200ms ease;
    font-size: 15px;
    border: none;
    color: #fff;
  }
`;
