import React from "react";

//Para las rutas
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Componentes
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
