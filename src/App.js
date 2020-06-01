import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Hyromancer from "./components/hyromancer/hyromancer";
import Portal from "./components/portal/Portal";
import LinesOfFate from "./components/linesOfFate/LinesOfFate";
import HyromancerSecond from "./components/initiation/DatePicker";
import "antd/dist/antd.dark.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Today from "./components/horoscope/Today";
import Month from "./components/horoscope/Month";
import Week from "./components/horoscope/Week";
import Initiation from "./components/initiation/Initiation";
import BirthDatePicker from "./components/initiation/DatePicker";
import Payment from "./components/initiation/Payment";
import PreHeader from "./components/header/PreHeader";
import MainPage from "./mainPage/MainPage";
import Palmistry from "./components/palmistry/Palmistry";


function App() {
    return (
        <BrowserRouter>
            <div className={style.appContainer}>
                <Route exact path={'/success'} render={() => <Container/>}/>
                <Route path={'/'} render={() => <MainPage/>}/>
                <Route exact path={'/init'} render={() => <BirthDatePicker/>}/>
                <Route exact path={'/payment'} render={() => <Payment/>}/>
                <Route exact path={'/hyromancer'} render={() => <Hyromancer/>}/>
                <Route exact path={'/horoscope/Today'} render={() => <Today/>}/>
                <Route exact path={'/horoscope/Week'} render={() => <Week/>}/>
                <Route exact path={'/horoscope/Month'} render={() => <Month/>}/>
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
                <Route exact path={'/horoscope/Today'} render={() => <Today/>}/>
                <Route exact path={'/horoscope/Week'} render={() => <Week/>}/>
                <Route exact path={'/horoscope/Month'} render={() => <Month/>}/>
                <Route path={'/hyromancer'} render={() => <Hyromancer/>}/>
                <Route path={'/hyromancer/payment'} render={() => <HyromancerSecond/>}/>
                <Route path={'/portal'} render={() => <Portal/>}/>
                <Route path={'/fate'} render={() => <LinesOfFate/>}/>
            </div>
        </>
    )
};

export default App;
