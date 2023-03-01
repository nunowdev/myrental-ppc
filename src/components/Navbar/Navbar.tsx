import * as React from "react";
import { NavbarContainer, NavbarNavigation, NavbarWrapper } from "./style";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9881ffaee58ad703b6dcd_Logo.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
          alt=""
          className="hamburguer"
        />
        <NavbarNavigation>
          <div className="nav_link">Pages</div>
          <div className="nav_link">About Us</div>
          <div className="nav_link">Faq</div>
          <div className="nav_link">Blog</div>
          <div className="nav_link">Contact Us</div>
          <div className="nav_link_red">800-234-567</div>
          <div className="nav_link_mail" />
          <button className="nav_button">Book Property</button>
        </NavbarNavigation>
      </NavbarWrapper>
    </NavbarContainer>
  );
}
