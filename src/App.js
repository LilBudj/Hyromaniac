import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Hyromancer from "./components/hyromancer/hyromancer";
import Portal from "./components/portal/Portal";
import LinesOfFate from "./components/linesOfFate/LinesOfFate";
import HyromancerSecond from "./components/initiation/DatePicker";
import "antd/dist/antd.dark.css"
import Today from "./components/horoscope/Today";
import Month from "./components/horoscope/Month";
import Week from "./components/horoscope/Week";
import Initiation from "./components/initiation/Initiation";
import BirthDatePicker from "./components/initiation/DatePicker";
import Payment from "./components/initiation/Payment";

function App() {
    return (
        <BrowserRouter>
            <div className={style.appContainer}>
                <Route exact path={'/success'} render={() => <Container/>}/>
                <Route exact path={'/'} render={() => <Initiation/>}/>
                <Route exact path={'/init'} render={() => <BirthDatePicker/>}/>
                <Route exact path={'/payment'} render={() => <Payment/>}/>
            </div>
        </BrowserRouter>
    );
}

const Container = () => {
    return (
        <>
            <Header/>
            <div>
                <Route path={'/horoscope'} render={() => <Today/>}/>
                <Route path={'/horoscope/Today'} render={() => <Today/>}/>
                <Route path={'/horoscope/Week'} render={() => <Week/>}/>
                <Route path={'/horoscope/Month'} render={() => <Month/>}/>
                <Route path={'/hyromancer'} render={() => <Hyromancer/>}/>
                <Route path={'/hyromancer/payment'} render={() => <HyromancerSecond/>}/>
                <Route path={'/portal'} render={() => <Portal/>}/>
                <Route path={'/fate'} render={() => <LinesOfFate/>}/>
            </div>
        </>
    )
};

export default App;
