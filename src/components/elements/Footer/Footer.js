import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "../../../App.css";
import "./Footer.css";
import px from "../../../img/px.svg";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`fixed-bottom pt-2 foot-link ${
        theme ? `bg-darkness` : `bg-light`
      }`}
    >
      <h6>
        <span href="#">
          <img
            src={px}
            className={`App-logo-foot ${
              theme ? `imagedefond-dark` : `imagedefond-light`
            }`}
            alt="logo"
          />{" "}
        </span>
        <span className="foot-style-light"> © Déclic et des Claps 2024</span>
        <span className="foot-style-light"> - Tous droits réservés</span>
        <span className="foot-style-light"> I </span>
        <a
          className="foot-link "
          href="https://www.instagram.com/declicetdesclapsleteil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FaSquareInstagram className="mb-1" />
          </span>
          <span>Instagram </span>
          <span className="foot-style-light"> I </span>
        </a>

        <a
          className="foot-link"
          href="https://www.facebook.com/profile.php?id=100094026464760"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BiLogoFacebookSquare className="mb-1" />
          </span>
          <span>Facebook </span>
        </a>

        <span className="foot-style-light"> I </span>
        <span>S'abonner à la newsletter</span>
        <span className="foot-style-light"> I </span>

        <Link className="nav-style" to="/contact">
          Contacts
        </Link>

        <span className="foot-style-light">
          {" "}
          I
          <Link className="foot-style-light" to="/infos#" aria-current="page">
            &nbsp;Informations légales
          </Link>
        </span>
      </h6>
    </div>
  );
};

export default Footer;
