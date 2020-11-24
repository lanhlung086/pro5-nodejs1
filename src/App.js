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
import HeaderCakesGallery from "./HeaderCakesGallery";
import HeaderCateringGallery from "./HeaderCateringGallery";
import MainCateringGallery from "./MainCateringGallery";
import MainCakesGallery from "./MainCakesGallery";
import HeaderWeeklySpecials from "./HeaderWeeklySpecials";
import MainWeeklySpecials from "./MainWeeklySpecials";
import HeaderCatering from "./HeaderCatering";
import MainCatering from "./MainCatering";
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
              <HeaderCatering/>
              <MainCatering/>
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
            <Route exact path="/CakesGallery">
              <HeaderCakesGallery/>
              <MainCakesGallery/>
            </Route>
            <Route exact path="/CateringGallery">
              <HeaderCateringGallery/>
              <MainCateringGallery/>
            </Route>
            <Route exact path="/WeeklySpecials">
              <HeaderWeeklySpecials/>
              <MainWeeklySpecials/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
