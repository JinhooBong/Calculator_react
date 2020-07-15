import React from "react";
import classes from "../Calculator/Calculator.module.css";
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    }

    render() {
        return(
            <div className={classes.calculator}>
                <Display />
                <Keypad />
            </div>
        )
    }
}

export default Calculator;