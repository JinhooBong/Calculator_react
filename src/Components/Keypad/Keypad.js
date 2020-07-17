import React from 'react';
import Button from '../Buttons/Buttons'
import classes from "../Keypad/Keypad.module.css";
import { tsPropertySignature } from '@babel/types';

function Keypad(props) {
    return (
        <div>
            <div className={classes.rows}>
                <Button>C</Button>
                <Button>+/-</Button>
                <Button>.</Button>
                <Button>+</Button> 
            </div>

            <div className={classes.rows}>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>-</Button> 
            </div>

            <div className={classes.rows}>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>*</Button> 
            </div>

            <div className={classes.rows}>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>/</Button> 
            </div>

            <div className={classes.rows}>
                <Button></Button>
                <Button onButtonPress={props.onButtonPress}>0</Button>
                <Button></Button>
                <Button onButtonPress={props.onButtonPress}>=</Button> 
            </div>
        </div>
    )
}

export default Keypad;