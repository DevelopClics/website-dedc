import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import "bootstrap/dist/css/bootstrap.min.css" ; 
import './Navigation.css';
import '../../../App.css';

import px from '../../../px.svg';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import BtnToggle from "../Buttons/BtnToggles";

const Navigation = () => {
 
  const [show, setShow] = useState(false);
//  A mettre en place pour tous les boutons de la navbar
const [showabout, setShowabout] = useState(true);
   
 const showDropdown = (e) => {
        setShow(!show);
    }
  const hideDropdown = (e) => {
        setShow(false);
    }





const showDropdownabout = (e) => {
      setShowabout(!showabout);
  }
const hideDropdownabout = (e) => {
      hideShowabout(true);
  };  







    const { theme } = useContext(ThemeContext);

    return (      
     <Navbar expand="lg" 
    
      sticky="top"
      className={` ${
          theme ? `bg-darkness` : `bg-light`
        }`} 
        >
         <Container fluid className="mulish mulish-weight" >
           <Navbar.Brand  
              href="#">
                <img src={px} className={`App-nav ${theme ? `imagedefond-dark` : `imagedefond-light`}`} alt="logo"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}          
                navbarScroll
              >
                  
                <Nav.Link href="#action1">Accueil</Nav.Link>
                
                
                <NavDropdown 
                  title="Actualité" 
                  id="navbarScrollingDropdown" 
                  
                  
          
                    
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}  




                >
                  <NavDropdown.Item href="#actu1"> Programmation évènementielle</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#actu2">On parle de nous</NavDropdown.Item>
                </NavDropdown>
             

                <NavDropdown 
                  title="&Agrave; propos" 
                  id="navbarScrollingDropdown2" 
                 
                 

                  showabout={showabout}
                  onMouseEnter={showDropdownabout} 
                  onMouseLeave={hideDropdownabout}    
                      
                >
                  <NavDropdown.Item href="#aprop1" className="">L'expérimentation nationale</NavDropdown.Item>                  
                  <NavDropdown.Divider />

                  <NavDropdown  drop="end" title="Déclic et des Claps" navbarScroll id="navbarScrollingDropdown" className="couleur p-2" >
                    <NavDropdown.Item href="#decl1">Organigramme</NavDropdown.Item>
                    <NavDropdown.Item href="#adecl2">Raison d'être et valeurs</NavDropdown.Item>
                    <NavDropdown.Item href="#decl3">Photo et témoignage des salariés</NavDropdown.Item>
                  </NavDropdown>      
                
                </NavDropdown>
            

                <NavDropdown title="Nos activités" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#lol">Le LOL</NavDropdown.Item> 
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#camion">Le camion guinguette</NavDropdown.Item>  
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#conciergerie">La conciergerie</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#anim">Les animations</NavDropdown.Item>                    
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#anim">Le soutien aux associations et collectivités</NavDropdown.Item>                    
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#temoignage">Témoignage des clients</NavDropdown.Item>                    
                </NavDropdown>   
               

                <NavDropdown title="Rejoignez-nous" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#chom">Demandeurs d'emplois</NavDropdown.Item> 
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#partners">Partenaires</NavDropdown.Item>  
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#benev">Bénévoles</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#don" disabled>Faire un don</NavDropdown.Item>                                       
                </NavDropdown>
                <Nav.Link href="#action1">Contacts</Nav.Link>
                
               {/*  <Nav.Link href="#" disabled>
                  Link
                </Nav.Link> */}
                <Nav.Link href="#action1"><BtnToggle /></Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Recherche…"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-warning">Recherche</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   
      );
    }

    export default Navigation;