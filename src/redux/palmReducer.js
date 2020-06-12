import {palmistryAPI} from "../api/endpointAPI";

const FETCH_PALM_DATA = 'palm_reducer/FETCH_PALM_DATA';
const SET_FINGER_LENGTH = 'palm_reducer/SET_FINGER_LENGTH';
const SET_PALM_LENGTH = 'palm_reducer/SET_PALM_LENGTH';
const ACTIVATE_FINGER = 'palm_reducer/ACTIVATE_FINGER';
const ACTIVATE_PALM = 'palm_reducer/ACTIVATE_PALM';
const SET_PALM_SHAPE = 'palm_reducer/SET_PALM_SHAPE';
const CALCULATE_HAND_TYPE = 'palm_reducer/CALCULATE_HAND_TYPE';

const initialState = {
    dataBundles: {
        toughHandBundle: {
            first: "",
            second: "",
            third: ""
        },
        normalHandBundle: {
            first: "",
            second: "",
            third: ""
        },
        agilityHandBundle: {
            first: "",
            second: "",
            third: ""
        },
        squareHandBundle: {
            first: "",
            second: "",
            third: ""
        },
        longHandBundle: {
            first: "",
            second: "",
            third: ""
        },
        averageFingersBundle: {
            first: "",
            second: "",
            third: ""
        },
        staticOverallBundle: {
            first: "",
            second: "",
            third: ""
        },
        activeArmBundle: {
            first: "",
            second: "",
            third: ""
        },
        lifeLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        lifeResultBundle: {
            first: "",
            second: "",
            third: ""
        },
        earthSegmentsBundle: {
            first: "",
            second: "",
            third: ""
        },
        earthGapBundle: {
            first: "",
            second: "",
            third: ""
        },
        earthGapResultBundle: {
            first: "",
            second: "",
            third: ""
        },
        lifeLineBranches: {
            first: "",
            second: "",
            third: ""
        },
        supportLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        stressLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        airLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        shortAirBundle: {
            first: "",
            second: "",
            third: ""
        },
        mediumAirBundle: {
            first: "",
            second: "",
            third: ""
        },
        curveWindBundle: {
            first: "",
            second: "",
            third: ""
        },
        straightWindBundle: {
            first: "",
            second: "",
            third: ""
        },
        curvatureWindBundle: {
            first: "",
            second: "",
            third: ""
        },
        hardCurvedBundle: {
            first: "",
            second: "",
            third: ""
        },
        airGapBundle: {
            first: "",
            second: "",
            third: ""
        },
        crossGapBundle: {
            first: "",
            second: "",
            third: ""
        },
        distGapBundle: {
            first: "",
            second: "",
            third: ""
        },
        airLineBranches: {
            first: "",
            second: "",
            third: ""
        },
        aquaLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        shortAquaBundle: {
            first: "",
            second: "",
            third: ""
        },
        averageAquaBundle: {
            first: "",
            second: "",
            third: ""
        },
        longAquaBundle: {
            first: "",
            second: "",
            third: ""
        },
        aquaCurveBundle: {
            first: "",
            second: "",
            third: ""
        },
        aquaSpiritualBundle: {
            first: "",
            second: "",
            third: ""
        },
        aquaPhysicalBundle: {
            first: "",
            second: "",
            third: ""
        },
        aquaLineBranches: {
            first: "",
            second: "",
            third: ""
        },
        fireLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        fireRemoveBundle: {
            first: "",
            second: "",
            third: ""
        },
        fireFragmentsBundle: {
            first: "",
            second: "",
            third: ""
        },
        fireFullBundle: {
            first: "",
            second: "",
            third: ""
        },
        mirrorLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        attachmentLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        passionLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        apolloLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        mercuryLineBundle: {
            first: "",
            second: "",
            third: ""
        },
        sessionEndBundle: {
            first: "",
            second: "",
            third: ""
        }
    },
    stringData: {
        how_long_fingers_first: "",
        how_long_determine_second: ""
    },
    palmMeasures: {
        fingerLength: 60,
        palmLength: 60,
        palmShape: 'square'
    },
    sliderActivations: {
        isFingerActive: false,
        isPalmActive: false,
    },
    isLoading: true,
};

export const palmReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PALM_DATA: {
            const {
                though_arm_desription, though_arm_description_second, though_arm_description_third,
                arm_with_normal_agility_text, arm_with_normal_agility_text_2,
                agility_arm_first, agility_arm_second, agility_arm_third,
                square_hand_first, square_hand_second,
                long_arm_first, long_arm_second,
                palm_length, seek_bar_finger_unit,
                finger_length, how_long_fingers_first,
                short_fingers_first, short_fingers_second, short_fingers_third,
                middle_description_first, middle_description_second,
                long_fingers_description_first, long_fingers_description_second, long_fingers_description_third,
                wind_arm_first, wind_arm_second, wind_arm_third,
                water_arm_type_first, water_arm_type_second, water_arm_type_third, water_arm_type_fourth,
                fire_arm_type_first, fire_arm_type_second, fire_arm_type_third, fire_arm_type_fourth,
                earth_arm_type_first, earth_arm_type_second, earth_arm_type_third, earth_arm_type_fourth,
                active_arm_first, active_arm_second, active_arm_third,
                line_of_life_first, line_of_life_second, line_of_life_third,
                line_of_earth_20_first, life_of_earth_20_second,
                line_of_earth_21_first, line_of_earth_21_second,
                line_of_eath_22_first, line_of_earth_22_second,
                life_of_earth_23_first, life_of_earth_23_second,
                branches_of_line_of_earth_first, branches_of_line_of_earth_second, branches_of_line_of_earth_third,
                support_line_first, support_line_second, support_line_third,
                support_line_2_first, support_line_2_second, support_line_2_third,
                line_of_stress_1_first, line_of_stress_1_second, line_of_stress_1_third,
                line_of_stress_2_first, line_of_stress_2_second, line_of_stress_2_third,
                line_of_intelligence_1_first, line_of_intelligence_1_second, line_of_intelligence_1_third,
                line_of_intelligence_2_first, line_of_intelligence_2_second, line_of_intelligence_2_third,
                line_of_intelligence_3_first, line_of_intelligence_3_second,
                curve_line_of_wind_first, curve_line_of_wind_second,
                straight_line_of_wind_first, straight_line_of_wind_second, straight_line_of_wind_third,
                curvature_line_of_wind_first, curvature_line_of_wind_second, curvature_line_of_wind_third,
                hard_curved_line_of_wind_first, hard_curved_line_of_wind_second, hard_curved_line_of_wind_third,
                broken_earth_with_wind_first, broken_earth_with_wind_second, broken_earth_with_wind_third,
                broken_earth_with_wind_distance_first, broken_earth_with_wind_distance_second, broken_earth_with_wind_distance_third,
                broken_earth_with_wind_distance_1_first, broken_earth_with_wind_distance_1_second, broken_earth_with_wind_distance_1_third,
                branching_of_wind_first, branching_of_wind_second, branching_of_wind_third,
                line_of_heart_first, line_of_heart_second, line_of_heart_third,
                short_water_line_first, short_water_line_second,
                middle_water_line_first, middle_water_line_second, middle_water_line_third,
                long_water_line_first, long_water_line_second,
                water_line_about_curve_first, water_line_about_curve_second, water_line_about_curve_third,
                spiritual_line_of_heart_first, spiritual_line_of_heart_second,
                physical_line_of_heart_first, physical_line_of_heart_second, physical_line_of_heart_third,
                branching_of_line_heart_first, branching_of_line_heart_second,
                line_of_fire_first, line_of_fire_second, line_of_fire_third,
                line_of_fire_removed, line_of_fire_removed_first, line_of_fire_removed_second,
                line_of_fire_fragments, line_of_fire_fragments_second,
                line_of_fire_full_first, line_of_fire_full_second, line_of_fire_full_third,
                line_of_the_mirror_first, line_of_the_mirror_second,
                line_of_the_attachment_first, line_of_the_attachment_second, line_of_the_attachment_third,
                line_of_passion_title_first, line_of_passion_title_second,
                line_of_appolon_first, line_of_appolon_second,
                line_of_mercury_first, line_of_mercury_second,
                different_mark_earth,
                session_off_first, session_off_second, session_off_third,
            } = action.data;
            return {
                ...state,
                stringData: action.data,
                dataBundles: {
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
                    averageFingersBundle: {
                        first: middle_description_first,
                        second: middle_description_second,
                        third: arm_with_normal_agility_text
                    },
                    staticOverallBundle: {
                        first: earth_arm_type_first,
                        second: earth_arm_type_second,
                        third: earth_arm_type_third
                    },
                    activeArmBundle: {
                        first: active_arm_first,
                        second: active_arm_second,
                        third: active_arm_third
                    },
                    lifeLineBundle: {
                        first: line_of_life_first,
                        second: line_of_life_second,
                        third: line_of_life_third
                    },
                    lifeResultBundle: {
                        first: line_of_earth_20_first,
                        second: life_of_earth_20_second,
                        third: "",
                    },
                    earthSegmentsBundle: {
                        first: different_mark_earth,
                        second: "",
                        third: ""
                    },
                    earthGapBundle: {
                        first: line_of_eath_22_first,
                        second: line_of_earth_22_second,
                        third: ""
                    },
                    earthGapResultBundle: {
                        first: different_mark_earth,
                        second: "",
                        third: ""
                    },
                    lifeLineBranches: {
                        first: branches_of_line_of_earth_first,
                        second: branches_of_line_of_earth_second,
                        third: branches_of_line_of_earth_third
                    },
                    supportLineBundle: {
                        first: support_line_first,
                        second: support_line_second,
                        third: support_line_third
                    },
                    stressLineBundle: {
                        first: line_of_stress_1_first,
                        second: line_of_stress_1_second,
                        third: line_of_stress_1_third,
                    },
                    airLineBundle: {
                        first: line_of_intelligence_1_first,
                        second: line_of_intelligence_1_second,
                        third: line_of_intelligence_1_third,
                    },
                    shortAirBundle: {
                        first: line_of_intelligence_2_first,
                        second: line_of_intelligence_2_second,
                        third: line_of_intelligence_2_third,
                    },
                    mediumAirBundle: {
                        first: line_of_intelligence_3_first,
                        second: line_of_intelligence_3_second,
                        third: "",
                    },
                    curveWindBundle: {
                        first: curve_line_of_wind_first,
                        second: curve_line_of_wind_second,
                        third: "",
                    },
                    straightWindBundle: {
                        first: straight_line_of_wind_first,
                        second: straight_line_of_wind_second,
                        third: straight_line_of_wind_third,
                    },
                    curvatureWindBundle: {
                        first: curvature_line_of_wind_first,
                        second: curvature_line_of_wind_second,
                        third: curvature_line_of_wind_third,
                    },
                    hardCurvedBundle: {
                        first: hard_curved_line_of_wind_first,
                        second: hard_curved_line_of_wind_second,
                        third: hard_curved_line_of_wind_third,
                    },
                    airGapBundle: {
                        first: broken_earth_with_wind_first,
                        second: broken_earth_with_wind_second,
                        third: broken_earth_with_wind_third,
                    },
                    crossGapBundle: {
                        first: broken_earth_with_wind_distance_first,
                        second: broken_earth_with_wind_distance_second,
                        third: broken_earth_with_wind_distance_third,
                    },
                    distGapBundle: {
                        first: broken_earth_with_wind_distance_1_first,
                        second: broken_earth_with_wind_distance_1_second,
                        third: broken_earth_with_wind_distance_1_third,
                    },
                    airLineBranches: {
                        first: branching_of_wind_first,
                        second: branching_of_wind_second,
                        third: branching_of_wind_third,
                    },
                    aquaLineBundle: {
                        first: line_of_heart_first,
                        second: line_of_heart_second,
                        third: line_of_heart_third,
                    },
                    shortAquaBundle: {
                        first: short_water_line_first,
                        second: short_water_line_second,
                        third: "",
                    },
                    averageAquaBundle: {
                        first: middle_water_line_first,
                        second: middle_water_line_second,
                        third: middle_water_line_third,
                    },
                    longAquaBundle: {
                        first: long_water_line_first,
                        second: long_water_line_second,
                        third: "",
                    },
                    aquaCurveBundle: {
                        first: water_line_about_curve_first,
                        second: water_line_about_curve_second,
                        third: water_line_about_curve_third,
                    },
                    aquaSpiritualBundle: {
                        first: spiritual_line_of_heart_first,
                        second: spiritual_line_of_heart_second,
                        third: "",
                    },
                    aquaPhysicalBundle: {
                        first: physical_line_of_heart_first,
                        second: physical_line_of_heart_second,
                        third: physical_line_of_heart_third,
                    },
                    aquaLineBranches: {
                        first: branching_of_line_heart_first,
                        second: branching_of_line_heart_second,
                        third: "",
                    },
                    fireLineBundle: {
                        first: line_of_fire_first,
                        second: line_of_fire_second,
                        third: line_of_fire_third,
                    },
                    fireRemoveBundle: {
                        first: line_of_fire_removed,
                        second: line_of_fire_removed_first,
                        third: line_of_fire_removed_second,
                    },
                    fireFragmentsBundle: {
                        first: line_of_fire_fragments,
                        second: line_of_fire_fragments_second,
                        third: "",
                    },
                    fireFullBundle: {
                        first: line_of_fire_full_first,
                        second: line_of_fire_full_second,
                        third: line_of_fire_full_third,
                    },
                    mirrorLineBundle: {
                        first: line_of_the_mirror_first,
                        second: line_of_the_mirror_second,
                        third: ""
                    },
                    attachmentLineBundle: {
                        first: line_of_the_attachment_first,
                        second: line_of_the_attachment_second,
                        third: line_of_the_attachment_third
                    },
                    passionLineBundle: {
                        first: line_of_passion_title_first,
                        second: line_of_passion_title_second,
                        third: ""
                    },
                    apolloLineBundle: {
                        first: line_of_appolon_first,
                        second: line_of_appolon_second,
                        third: ""
                    },
                    mercuryLineBundle: {
                        first: line_of_mercury_first,
                        second: line_of_mercury_second,
                        third: ""
                    },
                    sessionEndBundle: {
                        first: session_off_first,
                        second: session_off_second,
                        third: session_off_third
                    }
                },
                isLoading: false
            }
        }
        case SET_FINGER_LENGTH: {
            return {
                ...state,
                palmMeasures: {
                    ...state.palmMeasures,
                    fingerLength: action.length
                }
            }
        }
        case SET_PALM_LENGTH: {
            return {
                ...state,
                palmMeasures: {
                    ...state.palmMeasures,
                    palmLength: action.length
                }
            }
        }
        case ACTIVATE_FINGER: {
            return {
                ...state,
                sliderActivations: {
                    ...state.sliderActivations,
                    isFingerActive: !state.sliderActivations.isFingerActive
                }
            }
        }
        case ACTIVATE_PALM: {
            return {
                ...state,
                sliderActivations: {
                    ...state.sliderActivations,
                    isPalmActive: !state.sliderActivations.isPalmActive
                }
            }
        }
        case SET_PALM_SHAPE: {
            return {
                ...state,
                palmMeasures: {
                    ...state.palmMeasures,
                    palmShape: action.palmShape
                }
            }
        }
        case CALCULATE_HAND_TYPE: {
            if (action.length < 60){
                if (action.form === 'square') return {
                    ...state,
                    dataBundles: {
                        ...state.dataBundles,
                        averageFingersBundle: {
                            first: state.stringData.short_fingers_first,
                            second: state.stringData.short_fingers_second,
                            third: state.stringData.short_fingers_third
                        },
                        staticOverallBundle: {
                            first: state.stringData.earth_arm_type_first,
                            second: state.stringData.earth_arm_type_second,
                            third: state.stringData.earth_arm_type_third
                        }
                    }
                    };
                else return {
                    ...state,
                    dataBundles: {
                        ...state.dataBundles,
                        averageFingersBundle: {
                            first: state.stringData.short_fingers_first,
                            second: state.stringData.short_fingers_second,
                            third: state.stringData.short_fingers_third
                        },
                        staticOverallBundle: {
                            first: state.stringData.fire_arm_type_first,
                            second: state.stringData.fire_arm_type_second,
                            third: state.stringData.fire_arm_type_third
                        }
                    }
                }
            }
            else if (action.form === 'square') return {
                ...state,
                dataBundles: {
                    ...state.dataBundles,
                    averageFingersBundle: {
                        first: state.stringData.middle_description_first,
                        second: state.stringData.middle_description_second,
                        third: ""
                    },
                    staticOverallBundle: {
                        first: state.stringData.wind_arm_first,
                        second: state.stringData.wind_arm_second,
                        third: state.stringData.wind_arm_third
                    }
                }
            };
            else return {
                    ...state,
                    dataBundles: {
                        ...state.dataBundles,
                        averageFingersBundle: {
                            first: state.stringData.middle_description_first,
                            second: state.stringData.middle_description_second,
                            third: ""
                        },
                        staticOverallBundle: {
                            first: state.stringData.water_arm_type_first,
                            second: state.stringData.water_arm_type_second,
                            third: state.stringData.water_arm_type_third
                        }
                    }
            }
        }
        default: {
            return state
        }
    }
};

const fetchDataAC = (data) => ({type: FETCH_PALM_DATA, data});
export const setFingerLength = (length) => ({type: SET_FINGER_LENGTH, length});
export const setPalmLength = (length) => ({type: SET_PALM_LENGTH, length});
export const activateFinger = () => ({type: ACTIVATE_FINGER});
export const activatePalm = () => ({type: ACTIVATE_PALM});
export const calculateHandType = (form, length) => ({type: CALCULATE_HAND_TYPE, form, length});
export const setPalmShape = (palmShape) => ({type: SET_PALM_SHAPE, palmShape});

export const fetchData = () => {
    return async (dispatch) => {
        let result = await palmistryAPI.getPalmistryData();
        dispatch(fetchDataAC(result.data))
    }
};