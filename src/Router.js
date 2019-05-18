import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './screens/home';
import Jogs from './screens/jogs';
import Info from './screens/info';
import Contact from './screens/contact';
import Header from './shared/Header';

function RoterComponent() {
  return (
    <Router>
    	<div className="globe_flex">
	    	<Header />
	        <Route exact path="/" component={Home} />
	        <Route exact path="/jogs" component={Jogs} />
	        <Route path="/info" component={Info} />
	        <Route path="/contact-us" component={Contact} />
	    </div>
    </Router>
  );
}

export default RoterComponent;
