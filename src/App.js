import React from "react";

//Para las rutas
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Componentes
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";
import Temporal from "./Components/Temporal";
import HomeEn from "./Components/Home-en";
import LandingPageEn from "./Components/LandingPage-en";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/-en" component={LandingPageEn}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/home-en" component={HomeEn}/>
          <Route exact path="/temporal" component={Temporal}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
