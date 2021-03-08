import React from 'react'
import {Component, Fragment} from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from "../pages/Home";
import Project from "../pages/Projectpage";
import About from "../pages/Aboutpage";
import Contact from "../pages/Contactpage";
import Terms from "../pages/Termspage";
import Refund from "../pages/Refundpage";
import Privacy from "../pages/Privacypage";
import Service from "../pages/Servicepage";

class Approute extends Component {
    render(){
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/project" component={Project} />
                    <Route exact path="/service" component={Service} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/terms" component={Terms} />
                    <Route exact path="/refund-policy" component={Refund} />
                    <Route exact path="/privacy" component={Privacy} />
                </Switch>
            </Fragment>
        )
    }
}

export default Approute;