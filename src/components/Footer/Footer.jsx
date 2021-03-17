import React from "react";
import styles from "./Footer.module.css";
import facebook from "./../../img/Facebook_icon.png";
import google from "./../../img/Google_icon.png";
import twitter from "./../../img/Twitter_icon.png";
import linkedin from "./../../img/LinkedIn_icon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer_p}>© Copyright 2021</p>
      <a href="#">
        <img src={facebook} alt="facebook" className={styles.footer_img} />
      </a>
      <a href="#">
        <img src={google} alt="gogle" className={styles.footer_img} />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" className={styles.footer_img} />
      </a>
      <a href="#">
        <img src={linkedin} alt="linkedin" className={styles.footer_img} />
      </a>
    </div>
  );
};

export default Footer;
