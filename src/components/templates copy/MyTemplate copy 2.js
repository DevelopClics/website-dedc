import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MyTemplate.css";
import "../../App.css";

import MyTemplateTitle from "./MyTemplateTitle";
import MyTemplateColRight from "./MyTemplateColRight";
import MyTemplateColLeft from "./MyTemplateColLeft";
import MyTemplateColCenter from "./MyTemplateColCenter";

const MyTemplate = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    {/* //////////////// DEBUT CONTAINER AVEC PHOTO ////////////////// */}
    <div id="start" 
         className={`container-fluid mb-5 p-sm-4 p-ld-3 h-100
         ${theme ? `photo-light` : `photo-dark`}`}        
    >  
            <MyTemplateTitle
              titleLineOneL={props.titleLineOneL}
              titleLineTwoL={props.titleLineTwoL}
              titleLineThreeL={props.titleLineThreeL}
              titleLineFourL={props.titleLineFourL}
            />
      {/* //////////////// DEBUT ALIGNEMENT EN RANGEES ////////////////// */ }  
      <div id="{props.id}" className="row mx-5 px-5">
         {/* //////////////// DEBUT GRAND TITRE ////////////////// */}     
            {/* //////////////// FIN BLOC GRAND TITRE ////////////////// */}             
            <MyTemplateColLeft 
              titleOneL={props.titleOneL}
              titleTwoL={props.titleTwoL}
              titleThreeL={props.titleThreeL}
              titleFourL={props.titleFourL}
              titleFiveL={props.titleFiveL}
              textL={props.textL}
              />
            <MyTemplateColCenter 
              titleOneC={props.titleOneC}
              titleTwoC={props.titleTwoC}
              titleThreeC={props.titleThreeC}
              titleFourC={props.titleFourC}
              titleFiveC={props.titleFiveC}
              textC={props.textC}
            />                
             <MyTemplateColRight 
              titleOneR={props.titleOneR}
              titleTwoR={props.titleTwoR}
              titleThreeR={props.titleThreeR}
              titleFourR={props.titleFourR}
              titleFiveR={props.titleFiveR}
              textR={props.textR}
              />
       </div> 
    </div> 
    </>
  );
};

export default MyTemplate;