import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MyTemplate.css";
import "../../App.css";
import Dash from "../../img/dash.svg";


const MyTemplateTitle = (props) => {
  const { theme } = useContext(ThemeContext);
  return (

    <div className="position-relative  ps-5 ">       
          <div className="position-absolute  ms-4 top-0 start-5 rounded-1 p-3">

           <div className="text-start">
              <div>
                  <div className="titre1 fondtransparent">
                    <img src={Dash} style={{width: "35%", marginLeft: "-10px"}} alt="dash"/> 
                    
                    <div className={`py-3 text-uppercase ${theme ? `text-light` : `text-dark`}`}>
                      <h1>{props.titleLineOneL}</h1>
                      <h1>{props.titleLineTwoL}</h1>
                      <h1>{props.titleLineThreeL}</h1>
                      <h1>{props.titleLineFourL}</h1> 
                    </div>
                    <img src={Dash} style={{width: "35%", marginLeft: "-10px"}} alt="dash"/> 
                   </div>
                </div>
              </div> 
            </div>
        </div>
  );
};

export default MyTemplateTitle;