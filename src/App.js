import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import Login from "./Login";
import ClientHome from "./components/client/ClientHome";
import FlightInfo from "./components/client/FlightInfo";
import Itinerary from "./components/client/Itinerary";
import Photos from "./components/client/Photos";
import ReleaseForm from "./components/client/ReleaseForm";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/home">
            <ClientHome />
          </Route>
          <Route exact path="/flightinfo">
            <FlightInfo />
          </Route>
          <Route exact path="/itinerary">
            <Itinerary />
          </Route>
          <Route exact path="/photos">
            <Photos />
          </Route>
          <Route exact path="/releaseform">
            <ReleaseForm />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(App);


