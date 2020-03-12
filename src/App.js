import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Horoscope from "./components/horoscope/Horoscope";
import Hyromancer from "./components/hyromancer/hyromancer";
import Portal from "./components/portal/Portal";
import LinesOfFate from "./components/linesOfFate/LinesOfFate";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Header/>
          <div>
              <Route exact path={'/'} render={() => <Redirect to={'/hyromancer'}/>}/>
              <Route exact path={'/horoscope'} render={() => <Horoscope/>}/>
              <Route exact path={'/hyromancer'} render={() => <Hyromancer/>}/>
              <Route exact path={'/portal'} render={() => <Portal/>} />
              <Route exact path={'/fate'} render={() => <LinesOfFate/>} />
          </div>
      </header>
    </div>
      </BrowserRouter>
  );
}

export default App;
