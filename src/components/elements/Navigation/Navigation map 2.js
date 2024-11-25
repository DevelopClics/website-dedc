



import "bootstrap/dist/css/bootstrap.min.css" ; 
import './Navigation.css';
import '../../../App.css';

import { Nav, Navbar, NavDropdown } from "react-bootstrap";



  const navBarData = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Tutorials",
        submenu: [
            {
                label: "React",
                url: "/react",
                submenu: [
                    {
                        label: "Hooks",
                        url: "/react/hooks",
                    },
                    {
                        label: "Context",
                        url: "/react/context",
                    },
                ],
            },
            {
                label: "JavaScript",
                url: "/javascript",
            },
        ],
    },
    {
        label: "About",
        url: "/about",
    },
];

const Navigation = () => {
    const menuShow = (mItems) => {
        return mItems.map(
            (item, index) => {
                if (item.submenu) {
                    return (
                        <NavDropdown
                            title={
                                item.label
                            }
                            key={index}
                            className="dropdown-menu-dark 
                                       dropend">
                            {menuShow(
                                item.submenu
                            )}
                        </NavDropdown>
                    );
                } else {
                    return (
                        <Nav.Link
                            href={
                                item.url
                            }
                            key={index}>
                            {item.label}
                        </Nav.Link>
                    );
                }
            }
        );
    };
    const navStyle = {
        color: "black",
        fontWeight: "bold",
    };
    return (
        <Navbar
            bg="light"
            expand="lg"
            variant="light">
            <Navbar.Brand href="#home">
                <h1
                    style={{
                        color: "green",
                    }}>
                    <b>GeeksforGeeks</b>
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    className="mr-auto"
                    style={navStyle}>
                    {menuShow(
                        navBarData
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
  










    export default Navigation;