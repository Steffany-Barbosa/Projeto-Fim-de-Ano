//import {BrowserRouter, Routes} from 'react-router-dom';
import facebookIcon from "../../assets/facebookIcon.png";
import twitterIcon from "../../assets/twitterIcon.png";
import youtubeIcon from "../../assets/youtubeIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import s from "./footer.module.scss";
import React from "react";

export default function Footer() {
  return (
    <footer>
        
        <h2>4002-8922</h2>

      <section className={s.footerIcon}>
        <img src={facebookIcon} alt="icone facebook" />
        <img src={twitterIcon} alt="icone twitter" />
        <img src={youtubeIcon} alt="icone youtube" />
        <img src={linkedinIcon} alt="icone linkedin" />
        <img src={instagramIcon} alt="icone instagram" />
      </section>
    </footer>
  );
}
