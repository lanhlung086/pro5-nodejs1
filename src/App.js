import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import HeaderBakeryMenu from "./HeaderBakeryMenu";
import MainBakeryMenu from "./MainBakeryMenu";
import HeaderCakes from "./HeaderCakes";
import MainCakes from "./MainCakes";
import Nav from "./Nav";
import Home from "./Home";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/Home">
              <Home/>
            </Route>
            <Route exact path="/Catering"></Route>
            <Route exact path="/Bakery">
              <HeaderBakeryMenu/>
              <MainBakeryMenu/>
            </Route>
            <Route exact path="/Deli"></Route>
            <Route exact path="/Cakes">
              <HeaderCakes/>
              <MainCakes/>
            </Route>
            <Route exact path="/About"></Route>
            <Route exact path="/Contact"></Route>
            <Route exact path="/OrderOnline"></Route>
          </Switch>
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
