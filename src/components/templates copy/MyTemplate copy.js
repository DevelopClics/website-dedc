import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MyTemplate.css";
import "../../App.css";
import Dash from "../../img/dash.svg";

const MyTemplate = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    {/* //////////////// DEBUT CONTAINER AVEC PHOTO ////////////////// */}
    <div  id="start" className="container-fluid photo mb-5 p-sm-4 p-ld-3 h-100 justify-content-top align-items-top">
      
      {/* //////////////// DEBUT ALIGNEMENT EN RANGEES ////////////////// */}

     
      <div id="{props.id}" className="mx-5 px-5 row">
      
         {/* //////////////// DEBUT GRAND TITRE ////////////////// */}
               <div className="row">
        <div className="col-4 rounded-1 shadow-sm">       
          <div className="rounded-1 p-lg-3">

           <div className="text-start">
              <div>
                  <div className="titre1 fondtransparent">
                    <img src={Dash} style={{width: "80%", marginLeft: "-35px"}} alt="dash"/> 
                    
                    <div className={`py-3 text-uppercase ${theme ? `text-dark` : `text-light`}`}>
                      <h1>{props.titleLineOneL}</h1>
                      <h1>{props.titleLineTwoL}</h1>
                      <h1>{props.titleLineThreeL}</h1>
                      <h1>{props.titleLineFourL}</h1>
                    </div>
                    <img src={Dash} style={{width: "80%", marginLeft: "-35px"}} alt="dash"/> 
                   </div>
                </div>
              </div> 
               {/* //////////////// FIN GRAND TITRE ////////////////// */}

               {/* //////////////// DEBUT BLOC GAUCHE ////////////////// */}   

 {/*    <div className="align pt-lg-3 ">
                  
                <div className="pt-2 col-10 offset-2 col-md-6 offset-md-3">
                  <h5
                    className={`${theme ? `bg-primary text-light` : `bg-light text-dark`}`}
                  >
                  </h5>
                </div>
            </div> */}

            
          {/* //////////////// FIN BLOC GAUCHE ////////////////// */}   

            </div>
        </div>
        <div
              id="hauteur-droite"
              className={`col-4 offset-4 align-self-end p-4 mt-0 rounded-3 shadow-sm
              ${theme ? `bg-dark-opacity text-light` : `bg-light-opacity text-dark`}`}
            >
            <div className="titre1 text-uppercase text-start">
              <h1>{props.titleOneR}</h1>
            </div>

          <div
           className={`
            ${theme ? `text-dark` : `text-light`}`}
          >
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleTwoR}&nbsp;</span></h3>
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleThreeR}&nbsp;</span></h3>
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleFourR}&nbsp;</span></h3>
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleFiveR}&nbsp;</span></h3>
          </div>
                <h4 className="Texte1 text-start">{props.textR}</h4>

            </div>
        </div>
        
       <div className="row">
          <div
          id="hauteur-gauche"
            className={`titre1  col-4 align-self-center p-4 mt-0 rounded-3 shadow-sm
            ${theme ? `bg-dark-opacity text-light` : `bg-light-opacity text-dark`}`}        
          >
            <div className="text-uppercase text-start">
              <h1>{props.titleOneL}</h1>                 
            </div>          

           <div
           className={`
            ${theme ? `text-dark` : `text-light`}`}
          >         
            <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleTwoL}&nbsp;</span></h3>
            <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleThreeL}&nbsp;</span></h3>
            <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleFourL}&nbsp;</span></h3>
            <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleFiveL}&nbsp;</span></h3>                 
          </div>
            <h4 className="Texte1 text-start">{props.textC}</h4>
          </div>
             {/* //////////////// DEBUT BLOC CENTRE ////////////////// */}
          <div
            id="hauteur-centre"
            className={`col-4 align-self-center p-4 mt-0 rounded-3 shadow-sm
            ${theme ? `bg-dark-opacity text-light` : `bg-light-opacity text-dark`}`}
          >

          <div className="titre1 text-uppercase text-start">
          <h1>{props.titleOneC}</h1> 
          </div>     

          <div
           className={`
            ${theme ? `text-dark` : `text-light`}`}
          >    
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleTwoC}&nbsp;</span></h3>
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleThreeC}&nbsp;</span></h3>
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleFourC}&nbsp;</span></h3>
          <h3 className="text-uppercase text-start"><span className="Titre2">&nbsp;{props.titleFiveC}&nbsp;</span></h3>
        </div>
          <h4 className="Texte1 text-start">{props.textC}</h4>
        </div>
            {/* //////////////// FIN BLOC CENTRE ////////////////// */}
            {/* //////////////// DEBUT BLOC DROITE ////////////////// */}
          
            {/* //////////////// FIN BLOC DROITE ////////////////// */}
       </div>
      </div>
     
      {/* //////////////// FIN ALIGNEMENT EN RANGEES ////////////////// */}
    </div> 
    {/* //////////////// FIN CONTAINER AVEC PHOTO ////////////////// */}
    </>
  );
};

export default MyTemplate;