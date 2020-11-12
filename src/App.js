import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Service';
import Navbarr from './Component/Navbarr'
import Footer from './Component/Footer'



function App() {
  return (
        <div className="app">
          <Navbarr></Navbarr>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service} />
            <Redirect to="/"/>
          </Switch>
          <Footer/>
        </div>
  );
}

export default App;
