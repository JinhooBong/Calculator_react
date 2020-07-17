import React from 'react';
import classes from './Buttons.module.css';
import { isProperty } from '@babel/types';

function Button(props) {

    // const classes = ['btn'];

    // if(typeof props !== 'undefined' && typeof props.type !== 'undefined') {
    //     classes.push('btn--' + props.type);
    // }

    return (
        <button className={classes.buttons} onClick={props.onButtonPress}>
            {props.children}
        </button>
    );
}

export default Button;