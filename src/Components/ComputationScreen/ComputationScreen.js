import React from 'react';
import classes from './ComputationScreen.module.css';

function computationScreen (props) {
    return(
        <div className={classes.computation_screen}>
            {props.children}
        </div>
    )
};

export default computationScreen;