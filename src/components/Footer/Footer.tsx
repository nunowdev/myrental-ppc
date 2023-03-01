import * as React from "react";
import {
  FooterBottom,
  FooterContainer,
  FooterLinks,
  FooterTop,
  FooterWrapper,
  Newsletter,
} from "./style";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <div className="main_info">
            <img
              src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb9881ffaee58ad703b6dcd_Logo.png"
              alt=""
            />
            <h1>
              MyRental is Webflow Template designed to showcase your property
              for rental.
            </h1>
            <p>Learn more</p>
            <div className="socials">
              <div className="social facebook" />
              <div className="social_twitter" />
              <div className="social instagram" />
              <div className="social email" />
            </div>
          </div>
          <div className="flex">
            <FooterLinks>
              <h1>Menu</h1>
              <h2 className="home">Home</h2>
              <h2>About us</h2>
              <h2>Faq</h2>
              <h2>Blog</h2>
              <h2>Subscribe!</h2>
              <h2>Contact us</h2>
            </FooterLinks>
            <FooterLinks>
              <h1>Pages</h1>
              <h2>Style Guide</h2>
              <h2>Instructions</h2>
              <h2>Licensing</h2>
              <h2>Changelog</h2>
              <h2>Login</h2>
              <h2>404</h2>
            </FooterLinks>
          </div>
          <Newsletter>
            <h1>Newsletter</h1>
            <div className="footer_image" />
            <input
              type="text"
              className="footer_input"
              placeholder="your@email.com"
            />
            <div className="subscribe">
              <h1>Subscribe!</h1>
            </div>
          </Newsletter>
        </FooterTop>
        <FooterBottom>
          <p>
            <span>Buy Template </span> |&nbsp;
          </p>
          <p>
            <span>Version 1.1</span> |&nbsp;
          </p>
          <p>
            Image <span>Licensing</span> |&nbsp;
          </p>
          <p>
            Made By <span>Pablo Ramos</span> |&nbsp;
          </p>
          <p>
            Visit <span>My Templates</span> |&nbsp;
          </p>
          <p>
            Powered by <span>CloudInfo</span>
          </p>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
}
