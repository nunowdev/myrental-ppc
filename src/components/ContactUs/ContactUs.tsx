import * as React from "react";
import { ContactUsContainer } from "./style";

export default function ContactUs() {
  return (
    <ContactUsContainer>
      <div className="subtitle">Contact us</div>
      <div className="title">Find us in all our social networks</div>
      <div className="socials">
        <div className="social facebook" />
        <div className="social_twitter" />
        <div className="social instagram" />
        <div className="social email" />
      </div>
    </ContactUsContainer>
  );
}
