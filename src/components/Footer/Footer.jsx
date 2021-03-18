import React from "react";
import styles from "./Footer.module.css";
import facebook from "./../../img/Facebook_icon.png";
import google from "./../../img/Google_icon.png";
import twitter from "./../../img/Twitter_icon.png";
import linkedin from "./../../img/LinkedIn_icon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.p}>© Copyright 2021</p>
      <a href="https://www.facebook.com/sashaAl4i">
        <img src={facebook} alt="facebook" className={styles.img} />
      </a>
      <a href="#">
        <img src={google} alt="google" className={styles.img} />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" className={styles.img} />
      </a>
      <a href="https://www.linkedin.com/in/aleksandr-danilin-b351b8201/">
        <img src={linkedin} alt="linkedin" className={styles.img} />
      </a>
    </div>
  );
};

export default Footer;
