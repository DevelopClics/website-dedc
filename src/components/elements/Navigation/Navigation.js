import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { HashLink as Link } from "react-router-hash-link";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import "../../../App.css";

import px from "../../../img/px.svg";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import BtnToggle from "../Buttons/BtnToggles";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={` ${theme ? `bg-darkness` : `bg-light`}`}
    >
      <Container fluid className="mulish mulish-weight">
        <Link to="/#home" aria-current="page">
          <Navbar.Brand href="#">
            <img
              src={px}
              className={`App-nav ${
                theme ? `imagedefond-dark` : `imagedefond-light`
              }`}
              alt="logo"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link className="nav-style" to="/#home">
                Accueil
              </Link>
            </Nav.Link>

            <NavDropdown
              className="nav-style"
              title="Actualité"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item id="prog">
                <Link className="nav-style" to="/news/#eventschedule">
                  Programmation évènementielle
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#actu2" className="nav-style">
                <Link className="nav-style" to="/news/#talkabout">
                  Ils parlent de nous
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav-style"
              title="&Agrave; propos"
              id="navbarScrollingDropdown2"
            >
              <NavDropdown.Item>
                <Link
                  to="/about/#about-experiment"
                  className="nav-style drop-item"
                >
                  L'expérimentation nationale
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown
                className="nav-style couleur p-2"
                drop="end"
                title="Déclic et des Claps"
                navbarScroll
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item className="nav-style" href="#decl1">
                  Titre à définir
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-style" href="#adecl2">
                  Raison d'être et valeurs
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-style" href="#decl3">
                  Photo et témoignage des salariés
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            <NavDropdown
              className="nav-style"
              title="Nos services"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="nav-style" href="#lol">
                Le LOL
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className="nav-style" href="#anim">
                Les animations jeux
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-style" href="#camion">
                La guinguette mobile
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className="nav-style" href="#conciergerie">
                Bienvenue ! Conciergerie
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-style" href="#loc-vaisselle">
                Location de vaisselle
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item className="nav-style" href="#anim">
                Le soutien aux associations et collectivités
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-style" href="#temoignage">
                Témoignage des clients
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-style" href="#perisco">
                Ateliers périscolaires
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="nav-style"
              title="Rejoignez-nous"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="nav-style">
                <Link className="nav-style" to="/join-us/#ourpartners">
                  Partenaires
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className="nav-style">
                <Link className="nav-style" to="/join-us/#join-volunteers">
                  Bénèvoles
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className="nav-style">
                <Link className="nav-style" to="/join-us/#join-unemployed">
                  Demandeurs d'emplois
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className="nav-style" href="#don" disabled>
                Faire un don
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-style" href="#action1">
              <Link className="nav-style" to="/contact/#contact-us">
                Contacts
              </Link>
            </Nav.Link>

            {/*  <Nav.Link href="#" disabled>
                  Link
                </Nav.Link> */}
            <Nav.Link href="#action1">
              <BtnToggle />
            </Nav.Link>
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
};

export default Navigation;
