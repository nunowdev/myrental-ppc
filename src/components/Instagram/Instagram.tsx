import * as React from "react";
import { InstagramContainer } from "./style";

export default function Instagram() {
  return (
    <InstagramContainer>
      <div className="subtitle">Instagram</div>
      <div className="title">Follow us</div>
      <div className="instagram_posts">
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988219c6db489eb3d4d14_Insta%20(1).jpg"
          alt=""
          className="post first"
        />
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988227a07e5b579b1219a_Insta-2%20(1).jpg"
          alt=""
          className="post first_mobile"
        />
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb988218b0fcc7d5c029360_Insta-3%20(1).jpg"
          alt=""
          className="post last_mobile"
        />
        <img
          src="https://assets.website-files.com/5fb94d66e5e1d8ea7d729c38/5fb98823741e70d90e1254c8_Insta-4.jpg"
          alt=""
          className="post last"
        />
      </div>
    </InstagramContainer>
  );
}
