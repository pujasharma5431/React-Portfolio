// import NavigationComp from './components/NavigationComp/NavigationComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavigComp from './components/NavigationComp/NavigComp';
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div className="App-header">


                <NavigComp/>

                <div>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/projects">
                            <Projects/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
