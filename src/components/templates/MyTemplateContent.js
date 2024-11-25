import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MyTemplate.css";
import "../../App.css";

const MyTemplateColLeft = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="hauteur"
      className={`titre1  col rounded-1 
            ${
              theme
                ? `bg-dark-opacity text-light`
                : `bg-light-opacity text-dark`
            }`}
    >
      <div className="text-uppercase  text-start">
        <h1>{props.titleOneL}</h1>
      </div>

      <div
        className={`
            ${theme ? `text-dark` : `text-light`}`}
      >
        <h4 className="text-uppercase text-start">
          <span className="Titre2 px-2">{props.titleTwoL}</span>
        </h4>
        <h4 className="text-uppercase text-start">
          <span className="Titre2 px-2">{props.titleThreeL}</span>
        </h4>
        <h4 className="text-uppercase text-start">
          <span className="Titre2 px-2">{props.titleFourL}</span>
        </h4>
        <h4 className="text-uppercase text-start">
          <span className="Titre2 px-2">{props.titleFiveL}</span>
        </h4>
      </div>
      <h5 className="Texte1 text-start">{props.textL}</h5>
    </div>
  );
};

export default MyTemplateColLeft;
