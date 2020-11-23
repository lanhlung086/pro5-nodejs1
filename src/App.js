import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import React from 'react';
import HeaderBakeryMenu from "./HeaderBakeryMenu";
import MainBakeryMenu from "./MainBakeryMenu";
import HeaderCakes from "./HeaderCakes";
import MainCakes from "./MainCakes";
import Nav from "./Nav";
import HeaderHome from "./HeaderHome";
import MainHome from "./MainHome";
import HeaderBakery from "./HeaderBakery";
import MainBakery from "./MainBakery";
import HeaderContact from "./HeaderContact";
import MainContact from "./MainContact";
import Footer from "./Footer";
import Deli from "./Deli";
import About from "./About";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/">
              <HeaderHome/>
              <MainHome/>
            </Route>
            <Route exact path="/Catering">

            </Route>
            <Route exact path="/Bakery">
              <HeaderBakery/>
              <MainBakery/>
            </Route>
            <Route exact path="/BakeryMenu">
              <HeaderBakeryMenu/>
              <MainBakeryMenu/>
            </Route>
            <Route exact path="/Deli">
              <Deli/>
            </Route>
            <Route exact path="/Cakes">
              <HeaderCakes/>
              <MainCakes/>
            </Route>
            <Route exact path="/About">
              <About/>
            </Route>
            <Route exact path="/Contact">
              <HeaderContact/>
              <MainContact/>
            </Route>
            <Route exact path="/OrderOnline">

            </Route>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
