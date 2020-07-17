import React from 'react';
import DisplayComp from '../DisplayComp/DisplayComp';
import ComputationScreen from '../ComputationScreen/ComputationScreen';
import classes from './Display.module.css';

function Display(props) {
    return (
        <div className={classes.display}>
            <DisplayComp>{props.result}</DisplayComp>
            <ComputationScreen>{props.equation}</ComputationScreen>
        </div>
    )
}

export default Display;