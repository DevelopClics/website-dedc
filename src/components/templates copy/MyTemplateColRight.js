import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MyTemplate.css";
import "../../App.css";

const MyTemplateColRight = (props) => {
  const { theme } = useContext(ThemeContext);
  return (

    <div
    id="hauteur-droite"
    className={`titre1  col-12 col-lg-6 col-xl-4 p-0 p-sm-2 p-lg-3 p-xl-4 order-1 rounded-1 
    ${theme ? `bg-dark-opacity text-light` : `bg-light-opacity text-dark`}`}
  >
  <div className="titre1 text-uppercase text-start">
    <h1>{props.titleOneR}</h1>
  </div>

<div
 className={`
  ${theme ? `text-dark` : `text-light`}`}
>
<h4 className="text-uppercase text-start"><span className="Titre2 px-2">{props.titleTwoR}</span></h4>
<h4 className="text-uppercase text-start"><span className="Titre2 px-2">{props.titleThreeR}</span></h4>
<h4 className="text-uppercase text-start"><span className="Titre2 px-2">{props.titleFourR}</span></h4>
<h4 className="text-uppercase text-start"><span className="Titre2 px-2">{props.titleFiveR}</span></h4>
</div>
      <h5 className="Texte1 text-start">{props.textR}</h5>

</div>
  );
};

export default MyTemplateColRight;