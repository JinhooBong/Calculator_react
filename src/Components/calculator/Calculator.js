import React from "react";
import classes from "../calculator/Calculator.module.css";
import DisplayComp from '../DisplayComp/DisplayComp';
import Keypad from '../Keypad/Keypad';

function Calculator() {

   // let buttonClicked = '';

   // function display(e) {
   //    buttonClicked = e.target.innerHTML;
   //    console.log("button clicked " + buttonClicked);
   // }

    return(
        <div className={classes.calculator}>
            <DisplayComp/>
            <Keypad />
        </div>
    )
}

export default Calculator;