import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Link } from "react-router-dom";

const NoPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="about">
        <div
          className={`p-3  mt-0 rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <div
            className={`mt-3 rounded-2 container ${
              theme ? `bg-primary text-light` : `bg-light text-dark`
            }`}
          >
            <h1>ERREUR</h1>
            <div className="col-8 mx-auto"></div>
            <div className="pt-2 col-10 col-md-6 offset-md-3">
              <h5
                className={`pt-lg-3 text-center 
                ${theme ? `bg-primary text-light` : `bg-light text-dark`}
                `}
              >
                Merci de revenir à l'&nbsp;
                <Link to="/#home">
                  <button
                    type="button"
                    className={`btn btn-sm fw-bold
                    ${theme ? `btn-primary` : `btn-info`}
                    `}
                  >
                    ACCUEIL
                  </button>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
