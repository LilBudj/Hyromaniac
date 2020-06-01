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

const retaliate = async (fetchData, setBundle, setLoad) => {
    let result = await palmistryAPI.getPalmistryData();
    fetchData(result.data);
    const {
        though_arm_desription, though_arm_description_second, though_arm_description_third,
        arm_with_normal_agility_text, arm_with_normal_agility_text_2,
        agility_arm_first, agility_arm_second, agility_arm_third,
        square_hand_first, square_hand_second,
        long_arm_first, long_arm_second
    } = result.data;
    setBundle({
        toughHandBundle: {
            first: though_arm_desription,
            second: though_arm_description_second,
            third: though_arm_description_third
        },
        normalHandBundle: {
            first: arm_with_normal_agility_text,
            second: arm_with_normal_agility_text_2,
            third: ""
        },
        agilityHandBundle: {
            first: agility_arm_first,
            second: agility_arm_second,
            third: agility_arm_third
        },
        squareHandBundle: {
            first: square_hand_first,
            second: square_hand_second,
            third: ''
        },
        longHandBundle: {
            first: long_arm_first,
            second: long_arm_second,
            third: ''
        },
    });
    setLoad(false);
};

const Palmistry = () => {
    useEffect(() => {
        retaliate(fetchData, setBundle, setLoad);
    }, []);

    const [data, fetchData] = useState(null);
    const [isLoading, setLoad] = useState(true);
    const [bundle, setBundle] = useState({
        toughHandBundle: "",
        normalHandBundle: "",
        agilityHandBundle: "",
        squareHandBundle: "",
        longHandBundle: ""
    });

    debugger

    return (
        <div className={"d-flex flex-column align-center w-80"}>
            <Fade left>
            {isLoading ? <img src={preloader} alt={'preloader'}/>
                : <>
                    <Route exact path={'/palmistry'} render={() => <InitPalm data={data}/>}/>
                    <Route exact path={'/palmistry/flexible'} render={() => <Flexipalm data={bundle.agilityHandBundle} link={'/palmistry/shape'}/>}/>
                    <Route exact path={'/palmistry/average'} render={() => <Flexipalm data={bundle.normalHandBundle} link={'/palmistry/shape'}/>}/>
                    <Route exact path={'/palmistry/hard'} render={() => <Flexipalm data={bundle.toughHandBundle} link={'/palmistry/shape'}/>}/>
                    <Route exact path={'/palmistry/shape'} render={() => <HandShape data={data}/>}/>
                    <Route exact path={'/palmistry/shape/square'} render={() => <Flexipalm data={bundle.squareHandBundle} link={'/palmistry/shape'}/>}/>
                    <Route exact path={'/palmistry/shape/long'} render={() => <Flexipalm data={bundle.longHandBundle} link={'/palmistry/shape'}/>}/>
                </>
            }
            </Fade>
        </div>
    )
};

export default Palmistry