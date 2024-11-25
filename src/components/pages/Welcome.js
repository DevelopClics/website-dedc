import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Welcome = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="pt-5" id="home"></div>

      <div className="container pt-5 rounded-1">
        <div className="text-middle text-light">
          <h1>
            <span className="Titre2 ps-2">1</span>
            <span className="Titre2">
              <sup>ère</sup>
            </span>
            <span className="Titre2"> EBE</span>
            <span className=" Titre2 Texte1"> (Entreprise à But d'Emploi)</span>
            <span className=" Titre2 pe-2"> évènementielle</span>{" "}
          </h1>
        </div>

        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          <h4 className="pt-4 text-light text-uppercase text-start">
            <span className="Titre2 px-2">Nos services</span>
          </h4>

          <h5 className="pt-2 Texte1 text-start">
            • Le LOL
            <br />
            • Les animations jeux
            <br />
            • La Guinguette mobile
            <br />
            • Bienvenue! Conciergerie
            <br />
            • La Location de vaisselle
            <br />
            • Les ateliers périscolaires
            <br />
          </h5>

          <h4 className="pt-4 text-light text-uppercase text-start">
            <span className="Titre2 px-2">Bénéfices clients</span>
          </h4>
          <h5 className="pt-2 Texte1 text-start">
            <strong>
              <u>
                Nos services ont des répercussions positives pour nos clients
              </u>{" "}
              :
            </strong>
            <br />
            • Témoignage de nos clients, public et partenaires
            <br />• Pourquoi faire appel à{" "}
            <strong>Déclic et des Claps ?</strong>
            <br />
            - local, solidaire et créateur d'emplois
            <br />
            - créer du lien social
            <br />
            - participer au développement du territoire
            <br />
            - faire appel à une entreprise qui crée un bon environnement de
            collaborateurs : temps choisi, prise en consideration du handicap,
            adaptation des activités aux compétences, coopérative SCIC <br />
          </h5>
        </div>
      </div>
      <div className="mb-5 pb-5"></div>
    </>
  );
};

export default Welcome;
