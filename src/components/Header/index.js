import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from '../Navigation';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portofolio';
import Resume from '../Resume';

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className="row Header" id="header">
                    <a href="https://github.com/cleanjenn/jhg-react-portfolio/">
                        <img src="https://img.icons8.com/cotton/64/000000/launch-rocket.png" alt="Jennifer" class="icon" id="spaceship" />
                    </a>
                    <Navigation />
                </div>


                <div className="content">
                    <Route exact path="/" render={() => (<Redirect to="/portfolio" />)} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </div>
            </HashRouter>
        )
    }
}

export default Header;