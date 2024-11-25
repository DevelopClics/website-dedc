import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
/* import H2 from "../Elements/H2"; */

const Infos = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="infos">
        <div
          className={`p-3 mt-3  rounded-3 shadow-sm ${
            theme ? `bg-primary` : `bg-light`
          }`}
        >
          <h2>Informations Légales</h2>
          {/* <H2 content="Informations Légales" /> */}
          <div className="container">
            <div className="text-start">
              <h1>Le présent site est la propriété de Déclic et des Claps</h1>
            </div>

            <br />

            <div
              className={`row text-start
           ${theme ? `bg-primary text-light` : `bg-light text-dark`}
          `}
            >
              <div className="col">
                <h6>
                  <u>Siége Social</u> :
                  <br />
                  77 Rue de la République 07400 Le Teil
                  <br /> <br />
                  <u>Tél.</u> 09 55 23 69 90
                  <br /> <br />
                  <u>SIRET</u> :
                  <br />
                  539 096 172 000 41
                </h6>
              </div>

              <div className="col">
                <h6>
                  <u>Hébergeur</u> : <br />
                  OVH <br />2 Rue Kellermann, <br />
                  59100 Roubaix
                </h6>
              </div>
              <div className="col">
                <h6>
                  <u>Directrice de la publication :</u> <br />
                  Floriane PEVERELLI
                  <br /> <br />
                  <u>Charte Graphique</u> :<br />
                  Genaro Studio - Lyon
                  <br /> <br />
                  <u>Développement Web et Graphisme</u> :<br />
                  Julien Goscicki
                  <br /> <br />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infos;
