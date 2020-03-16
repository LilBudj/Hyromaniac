import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Hyromancer from "./components/hyromancer/hyromancer";
import Portal from "./components/portal/Portal";
import LinesOfFate from "./components/linesOfFate/LinesOfFate";
import HyromancerSecond from "./components/hyromancer/HyromancerSecond";
import "antd/dist/antd.css"
import Today from "./components/horoscope/Today";
import Month from "./components/horoscope/Month";
import Week from "./components/horoscope/Week";
import Initiation from "./components/initiation/Initiation";

function App() {
  return (
      <BrowserRouter>
    <div className={style.appContainer}>
          <Header/>
          <div>
              <Route exact path={'/'} render={() => <Initiation/>}/>
              <Route exact path={'/horoscope'} render={() => <Today/>}/>
              <Route exact path={'/horoscope/Today'} render={() => <Today/>}/>
              <Route exact path={'/horoscope/Week'} render={() => <Week/>}/>
              <Route exact path={'/horoscope/Month'} render={() => <Month/>}/>
              <Route exact path={'/hyromancer'} render={() => <Hyromancer/>}/>
              <Route exact path={'/hyromancer/payment'} render={() => <HyromancerSecond/>}/>
              <Route exact path={'/portal'} render={() => <Portal/>} />
              <Route exact path={'/fate'} render={() => <LinesOfFate/>} />
          </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
