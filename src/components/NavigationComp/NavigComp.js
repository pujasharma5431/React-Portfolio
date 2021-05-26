import React, { Component } from 'react'
import { Nav,NavDropdown,Navbar} from 'react-bootstrap'
// import  Navig from 'components/NavigationComp/NavigComp'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import './NavigComp.css'





export default class NavigComp extends Component {
    render() {
        return (
            <div>
                <Router>
            <div style={{
              backgroundColor:"#727272",
              
  justifyContent: "center"
              
            }}>
                <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand style={{
    fontSize:"30px"
   
  }}>Puja Sharma</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
    <Nav.Link as ={Link} to ={"/"}>Home</Nav.Link>
      <Nav.Link as ={Link} to ={"/about"}>About</Nav.Link>
      <Nav.Link as ={Link} to ={"/projects"}>Projects</Nav.Link>
      <Nav.Link as ={Link} to ={"/contact"}>Contact</Nav.Link>
     
        
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            </div>


<div>
<Switch>
                      <Route path="/about">
                        <About />
                      </Route>
                      <Route path="/projects">
                        <Projects/>
                      </Route>
                        <Route path="/contact">
                        <Contact />
                      </Route>
                      <Route path="/">
                       <Home/>
                      </Route>
                    </Switch>
</div>



</Router>
            </div>
        )
    }
}
