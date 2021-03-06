import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Hyromancer from "./components/hyromancer/hyromancer";
import Compatibility from "./components/compatibility/Compatibility";
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
import PalmistryContainer from "./components/palmistry/PalmistryContainer";
import CompatibilityContainer from "./components/compatibility/CompatibilityContainer";


function App() {
    return (
        <BrowserRouter>
            <div className={style.appContainer} id={'main-app'}>
                <Route exact path={'/success'} render={() => <Container/>}/>
                <Route exact path={'/'} render={() => <MainPage/>}/>
                <Route exact path={'/init'} render={() => <BirthDatePicker/>}/>
                <Route exact path={'/payment'} render={() => <Payment/>}/>
                <Route exact path={'/hyromancer'} render={() => <Hyromancer/>}/>
                <Route exact path={'/horoscope/Today'} render={() => <Today/>}/>
                <Route exact path={'/horoscope/Week'} render={() => <Week/>}/>
                <Route exact path={'/horoscope/Month'} render={() => <Month/>}/>
                <Route path={'/palmistry'} render={() => <PalmistryContainer/>}/>
                <Route exact path={'/compatibility'} render={() => <CompatibilityContainer/>}/>
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
                <Route path={'/fate'} render={() => <Compatibility/>}/>
            </div>
        </>
    )
};

export default App;
