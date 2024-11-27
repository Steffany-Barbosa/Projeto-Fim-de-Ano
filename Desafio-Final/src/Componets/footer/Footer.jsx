//import {BrowserRouter, Routes} from 'react-router-dom';
import facebookIcon from "../../assets/facebookIcon.png";
import twitterIcon from "../../assets/twitterIcon.png";
import youtubeIcon from "../../assets/youtubeIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import s from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      
      
        <section className={s.footerIcon}>
        <h2>4002-8922</h2>
        <nav>
          <a href="">
            <img src={facebookIcon} alt="icone facebook" />
          </a>
          <a href="">
            <img src={twitterIcon} alt="icone twitter" />
          </a>
          <a href="">
            <img src={youtubeIcon} alt="icone youtube" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="icone linkedin" />
          </a>
          <a href="">
            <img src={instagramIcon} alt="icone instagram" />
          </a>
          </nav>
        </section>
      
      <section className={s.copyrigth}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
  
}
