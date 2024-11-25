import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MyTemplate.css";
import "../../App.css";

import MyTemplateContent from "./MyTemplateContent";

const MyTemplate = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* //////////////// DEBUT CONTAINER AVEC PHOTO ////////////////// */}
      <div
        id="start"
        className={`container-fluid mb-1 p-sm-4 p-ld-3 h-100
         ${theme ? `photo-light` : `photo-dark`}`}
      >
        {/* //////////////// DEBUT ALIGNEMENT EN RANGEES ////////////////// */}
        <div className="row mx-1">
          {/* //////////////// DEBUT GRAND TITRE ////////////////// */}
          {/* //////////////// FIN BLOC GRAND TITRE ////////////////// */}
          <MyTemplateContent
            titleOneL={props.titleOneL}
            titleTwoL={props.titleTwoL}
            titleThreeL={props.titleThreeL}
            titleFourL={props.titleFourL}
            titleFiveL={props.titleFiveL}
            textL={props.textL}
          />
        </div>
      </div>
    </>
  );
};

export default MyTemplate;
