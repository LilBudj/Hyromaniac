import React, {useEffect, useState} from "react";
import style from "./Palmistry.module.css"
import PalmSign from "./PalmSIgn";
import {palmistryAPI} from "../../api/endpointAPI";
import preloader from "../../assets/Preloader.gif"
import InitPalm from "./InitionPalm";
import {Route} from "react-router-dom";
import {Fade} from "react-reveal";
import Flexipalm from "./Flexipalm";
import HandShape from "./HandShape";
import HandLength from "./HandLength";
import LinePalm from "./LinePalm";
import activeArmFirst from "../../assets/img9.png";
import activeArmSecond from "../../assets/img10.png";
import lifeLineFirst from "../../assets/img11.png";
import lifeLineSecond from "../../assets/img12.png";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";
import img17 from "../../assets/img17.png";
import img18 from "../../assets/img18.png";
import img19 from "../../assets/img19.png";
import img23 from "../../assets/img23.png";
import img25 from "../../assets/img25.png";
import img27 from "../../assets/img27.png";
import img29 from "../../assets/img29.png";
import img30 from "../../assets/img30.png";
import img31 from "../../assets/img31.png";
import img35 from "../../assets/img35.png";
import img36 from "../../assets/img36.png";
import img37 from "../../assets/img37.png";
import img41 from "../../assets/img41.png";
import img42 from "../../assets/img42.png";
import img45 from "../../assets/img45.png";
import img47 from "../../assets/img47.png";
import img48 from "../../assets/img48.png";
import img49 from "../../assets/img49.png";
import img52 from "../../assets/img52.png";
import img53 from "../../assets/img53.png";
import img57 from "../../assets/img57.png";
import img59 from "../../assets/img59.png";
import img60 from "../../assets/img60.png";
import img61 from "../../assets/img61.png";
import img65 from "../../assets/img65.png";
import img67 from "../../assets/img67.png";
import img69 from "../../assets/img69.png";
import img71 from "../../assets/img71.png";
import img73 from "../../assets/img73.png";

const Palmistry = (props) => {

    return (
        <div className={"d-flex flex-column align-center w-80"}>
            <Fade left>
                {props.isLoading ? <img src={preloader} alt={'preloader'}/>
                    : <div>
                        <Route exact path={'/palmistry'} render={() => <InitPalm data={props.data}/>}/>
                        <Route exact path={'/palmistry/flexible'}
                               render={() => <Flexipalm data={props.bundle.agilityHandBundle} link={'/palmistry/shape'}/>}/>
                        <Route exact path={'/palmistry/average'}
                               render={() => <Flexipalm data={props.bundle.normalHandBundle} link={'/palmistry/shape'}/>}/>
                        <Route exact path={'/palmistry/hard'}
                               render={() => <Flexipalm data={props.bundle.toughHandBundle} link={'/palmistry/shape'}/>}/>
                        <Route exact path={'/palmistry/shape'} render={() => <HandShape data={props.data}/>}/>
                        <Route exact path={'/palmistry/shape/square'}
                               render={() => <Flexipalm data={props.bundle.squareHandBundle} link={'/palmistry/length'}/>}/>
                        <Route exact path={'/palmistry/shape/long'}
                               render={() => <Flexipalm data={props.bundle.longHandBundle} link={'/palmistry/length'}/>}/>
                        <Route exact path={'/palmistry/length'} render={() => <HandLength data={props.data}/>}/>
                        <Route exact path={'/palmistry/length/average'}
                               render={() => <Flexipalm data={props.bundle.averageFingersBundle}
                                                        link={'/palmistry/static_overall'}/>}/>
                        <Route exact path={'/palmistry/static_overall'}
                               render={() => <Flexipalm data={props.bundle.staticOverallBundle}
                                                        link={'/palmistry/active'}/>}/>
                        <Route exact path={'/palmistry/active'} render={() =>
                            <LinePalm data={props.bundle.activeArmBundle} firstLink={'/palmistry/life_line'}
                                      secondLink={'/palmistry/life_line'} img1={activeArmFirst}
                                      img2={activeArmSecond}/>}/>
                        <Route exact path={'/palmistry/life_line'} render={() =>
                            <LinePalm data={props.bundle.lifeLineBundle} firstLink={'/palmistry/life_line/result'}
                                      secondLink={'/palmistry/earth_line/result'}
                                      img1={lifeLineFirst} img2={lifeLineSecond}/>}/>
                        <Route exact path={'/palmistry/earth_line/result'}
                               render={() => <Flexipalm data={props.bundle.lifeResultBundle}
                                                        link={'/palmistry/earth_line/segments'}/>}/>
                        <Route exact path={'/palmistry/earth_line/segments'} render={() =>
                            <LinePalm data={props.bundle.earthSegmentsBundle}
                                      firstLink={'/palmistry/earth_gap'}
                                      secondLink={'/palmistry/earth_gap'}
                                      img1={img15} img2={img16}/>}/>
                        <Route exact path={'/palmistry/earth_gap'} render={() =>
                            <LinePalm data={props.bundle.earthGapBundle} firstLink={'/palmistry/earth_gap/result'}
                                      secondLink={'/palmistry/earth_gap/result'}
                                      thirdLink={'/palmistry/earth_gap/result'}
                                      img1={img17} img2={img18} img3={img19}/>}/>
                        <Route exact path={'/palmistry/earth_gap/result'} render={() =>
                            <Flexipalm data={props.bundle.earthGapResultBundle} link={'/palmistry/earth_line/branches'}/>}/>
                        <Route exact path={'/palmistry/earth_line/branches'} render={() =>
                            <Flexipalm data={props.bundle.lifeLineBranches} link={'/palmistry/support_line'} img={img23}/>}/>
                        <Route exact path={'/palmistry/support_line'} render={() =>
                            <Flexipalm data={props.bundle.supportLineBundle} link={'/palmistry/stress_line'} img={img25}/>}/>
                        <Route exact path={'/palmistry/stress_line'} render={() =>
                            <Flexipalm data={props.bundle.stressLineBundle} link={'/palmistry/air_line'} img={img27}/>}/>
                        <Route exact path={'/palmistry/air_line'} render={() =>
                            <LinePalm data={props.bundle.airLineBundle} firstLink={'/palmistry/air_line/short'}
                                      secondLink={'/palmistry/air_line/medium'}
                                      thirdLink={'/palmistry/air_line/long'}
                                      img1={img29} img2={img30} img3={img31}/>}/>
                        <Route exact path={'/palmistry/air_line/short'} render={() =>
                            <Flexipalm data={props.bundle.shortAirBundle} link={'/palmistry/air_line/curve'}/>}/>
                        <Route exact path={'/palmistry/air_line/medium'} render={() =>
                            <Flexipalm data={props.bundle.mediumAirBundle} link={'/palmistry/air_line/curve'}/>}/>
                        <Route exact path={'/palmistry/air_line/curve'} render={() =>
                            <LinePalm data={props.bundle.curveWindBundle} firstLink={'/palmistry/air_line/straight'}
                                      secondLink={'/palmistry/air_line/curvature'}
                                      thirdLink={'/palmistry/air_line/hard_curved'}
                                      img1={img35} img2={img36} img3={img37}/>}/>
                        <Route exact path={'/palmistry/air_line/straight'} render={() =>
                            <Flexipalm data={props.bundle.straightWindBundle} link={'/palmistry/air_gap'}/>}/>
                        <Route exact path={'/palmistry/air_line/curvature'} render={() =>
                            <Flexipalm data={props.bundle.curvatureWindBundle} link={'/palmistry/air_gap'}/>}/>
                        <Route exact path={'/palmistry/air_line/hard_curved'} render={() =>
                            <Flexipalm data={props.bundle.hardCurvedBundle} link={'/palmistry/air_gap'}/>}/>
                        <Route exact path={'/palmistry/air_gap'} render={() =>
                            <LinePalm data={props.bundle.airGapBundle} firstLink={'/palmistry/air_gap/distant'}
                                      secondLink={'/palmistry/air_gap/crossed'}
                                      img1={img41} img2={img42}/>}/>
                        <Route exact path={'/palmistry/air_gap/distant'} render={() =>
                            <Flexipalm data={props.bundle.crossGapBundle} link={'/palmistry/air_branches'}/>}/>
                        <Route exact path={'/palmistry/air_gap/crossed'} render={() =>
                            <Flexipalm data={props.bundle.distGapBundle} link={'/palmistry/air_branches'}/>}/>
                        <Route exact path={'/palmistry/air_branches'} render={() =>
                            <Flexipalm data={props.bundle.airLineBranches} link={'/palmistry/aqua_line'} img={img45}/>}/>
                        <Route exact path={'/palmistry/aqua_line'} render={() =>
                            <LinePalm data={props.bundle.aquaLineBundle} firstLink={'/palmistry/aqua_line/short'}
                                      secondLink={'/palmistry/aqua_line/average'}
                                      thirdLink={'/palmistry/aqua_line/long'}
                                      img1={img47} img2={img48} img3={img49}/>}/>
                        <Route exact path={'/palmistry/aqua_line/short'} render={() =>
                            <Flexipalm data={props.bundle.shortAquaBundle} link={'/palmistry/aqua_line/curve'}/>}/>
                        <Route exact path={'/palmistry/aqua_line/average'} render={() =>
                            <Flexipalm data={props.bundle.averageAquaBundle} link={'/palmistry/aqua_line/curve'}/>}/>
                        <Route exact path={'/palmistry/aqua_line/long'} render={() =>
                            <Flexipalm data={props.bundle.longAquaBundle} link={'/palmistry/aqua_line/curve'}/>}/>
                        <Route exact path={'/palmistry/aqua_line/curve'} render={() =>
                            <LinePalm data={props.bundle.aquaCurveBundle} firstLink={'/palmistry/aqua_line/spiritual'}
                                      secondLink={'/palmistry/aqua_line/physical'}
                                      img1={img52} img2={img53}/>}/>
                        <Route exact path={'/palmistry/aqua_line/spiritual'} render={() =>
                            <Flexipalm data={props.bundle.aquaSpiritualBundle} link={'/palmistry/aqua_line/branches'}/>}/>
                        <Route exact path={'/palmistry/aqua_line/physical'} render={() =>
                            <Flexipalm data={props.bundle.aquaPhysicalBundle} link={'/palmistry/aqua_line/branches'}/>}/>
                        <Route exact path={'/palmistry/aqua_line/branches'} render={() =>
                            <Flexipalm data={props.bundle.aquaLineBranches} link={'/palmistry/fire_line'} img={img57}/>}/>
                        <Route exact path={'/palmistry/fire_line'} render={() =>
                            <LinePalm data={props.bundle.fireLineBundle} firstLink={'/palmistry/fire_line/removed'}
                                      secondLink={'/palmistry/fire_line/fragment'}
                                      thirdLink={'/palmistry/fire_line/full'}
                                      img1={img59} img2={img60} img3={img61}/>}/>
                        <Route exact path={'/palmistry/fire_line/removed'} render={() =>
                            <Flexipalm data={props.bundle.fireRemoveBundle} link={'/palmistry/mirror_line'}/>}/>
                        <Route exact path={'/palmistry/fire_line/fragment'} render={() =>
                            <Flexipalm data={props.bundle.fireFragmentsBundle} link={'/palmistry/mirror_line'}/>}/>
                        <Route exact path={'/palmistry/fire_line/full'} render={() =>
                            <Flexipalm data={props.bundle.fireFullBundle} link={'/palmistry/mirror_line'}/>}/>
                        <Route exact path={'/palmistry/mirror_line'} render={() =>
                            <Flexipalm data={props.bundle.mirrorLineBundle} link={'/palmistry/attachment_line'} img={img65}/>}/>
                        <Route exact path={'/palmistry/attachment_line'} render={() =>
                            <Flexipalm data={props.bundle.attachmentLineBundle} link={'/palmistry/passion_line'} img={img67}/>}/>
                        <Route exact path={'/palmistry/passion_line'} render={() =>
                            <Flexipalm data={props.bundle.passionLineBundle} link={'/palmistry/apollo_line'} img={img69}/>}/>
                        <Route exact path={'/palmistry/apollo_line'} render={() =>
                            <Flexipalm data={props.bundle.apolloLineBundle} link={'/palmistry/mercury_line'} img={img71}/>}/>
                        <Route exact path={'/palmistry/mercury_line'} render={() =>
                            <Flexipalm data={props.bundle.mercuryLineBundle} link={'/palmistry/session_end'} img={img73}/>}/>
                        <Route exact path={'/palmistry/session_end'} render={() =>
                            <Flexipalm data={props.bundle.sessionEndBundle} link={'/palmistry'}/>}/>
                    </div>
                }
            </Fade>
        </div>
    )
};

export default Palmistry