import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import FormContact from "../elements/FormContact";
// import FormContact from "../elements/FormContact";
/* import H2 from "../Elements/H2"; */

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="pt-5" id="contact-us"></div>
      <div className="container pt-5  rounded-1">
        <div className="text-middle text-light">
          <h1>
            <span className="Titre2 px-2">Contactez-nous</span>{" "}
          </h1>
        </div>

        <div className={`container ${theme ? `text-light` : `text-dark`}`}>
          <div className="row justify-content-md-center">
            <div className="col-sm-12 col-lg-9">
              <LazyLoadComponent>
                <iframe
                  title="map"
                  className={`mt-3 rounded-2  text-white`}
                  style={{ width: "100%", height: "500px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.2781517469907!2d4.680473376769629!3d44.55041077107373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5145e5a5b7d85%3A0x6c6b24d29a8bafe8!2s77%20Rue%20de%20la%20R%C3%A9publique%2C%2007400%20Le%20Teil!5e0!3m2!1sfr!2sfr!4v1732023174678!5m2!1sfr!2sfr"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </LazyLoadComponent>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h4 className="pt-4 text-light text-uppercase text-start">
                <span className="Titre2 px-2">Siège Social</span>
              </h4>

              <h5 className="pt-2 Texte1 text-start">
                <h6>
                  <strong>
                    N° 77 Rue de la République <br /> 07400 Le Teil
                  </strong>
                  <br /> <br />
                  <u>Tél.</u> : <strong>09 55 23 69 90</strong>
                  <br /> <br />
                  <u>E-mail</u> : <strong>accueil@declicetdesclaps.fr</strong>
                </h6>
              </h5>
            </div>

            <div className="col-sm-6 col-lg-2">
              <h4 className="pt-3 text-light text-uppercase text-end">
                <span className="Titre2 px-2">HORAIRES</span>
              </h4>
              <h5 className="pt-2 Texte1 text-end">
                <h6>
                  <strong>Du lundi au vendredi</strong>
                  <br />
                  09h00 à 12h00
                  <br />
                  14h00 à 18h00
                </h6>
              </h5>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h4 className="pt-3 text-light text-uppercase text-middle">
                <span className="">
                  <marquee className="Titre2 px-2" behavior="scroll">
                    Nous écrire un e-mail…
                  </marquee>
                </span>
              </h4>

              <FormContact />
            </div>
            <div className="col-sm-12 col-lg-3">
              <h4 className="pt-3 text-light text-uppercase text-start">
                <span className="Titre2 px-2">Réseaux sociaux</span>
              </h4>
              <h5 className="pt-2 Texte1 text-start">
                <h6>
                  <a
                    className={`rs-link ${theme ? `text-light` : `text-dark`}`}
                    href="https://www.facebook.com/profile.php?id=100094026464760"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BiLogoFacebookSquare className="mb-1" />
                    </span>
                    <span>Facebook </span>
                  </a>
                  <br />

                  <a
                    className={`rs-link ${theme ? `text-light` : `text-dark`}`}
                    href="https://www.instagram.com/declicetdesclapsleteil/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <FaSquareInstagram className="mb-1" />
                    </span>
                    <span>Instagram </span>
                  </a>
                </h6>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 pb-5"></div>
    </>
  );
};

export default Contact;
