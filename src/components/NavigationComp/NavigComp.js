import React, {Component} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
// import  Navig from 'components/NavigationComp/NavigComp'
import {Link} from "react-router-dom";
import './NavigComp.css'


export default class NavigComp extends Component {
    render() {
        return (
            <div>
                {/* <Router> */}
                <div style={{
                    backgroundColor: "#727272",

                    justifyContent: "center"

                }}>
                    <Navbar collapseOnSelect expand="lg" variant="dark">
                        <Navbar.Brand style={{
                            fontSize: "30px"

                        }}>Puja Sharma</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>


                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>



            </div>
        )
    }
}
