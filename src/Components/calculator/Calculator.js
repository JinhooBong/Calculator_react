import React from "react";
import classes from "../calculator/Calculator.module.css";

function Calculator() {

   let buttonClicked = '';

   function display(e) {
      buttonClicked = e.target.innerHTML;
      console.log("button clicked " + buttonClicked);
   }

   function changeDisplay() {
      return {__html: {buttonClicked}};
   }

    return(
        <div className={classes.calculator}>
            <div dangerouslySetInnerHTML={changeDisplay()} className={classes.displayBox}></div>
            <div className={classes.rows}>
               <button onClick={display} className={classes.buttons}>C</button> 
               <button onClick={display} className={classes.buttons}>+/-</button>
               <button onClick={display} className={classes.buttons}>.</button> 
               <button onClick={display} className={classes.buttons}>+</button> 
            </div>

            <div className={classes.rows}>
               <button onClick={display} className={classes.buttons}>1</button> 
               <button onClick={display} className={classes.buttons}>2</button> 
               <button onClick={display} className={classes.buttons}>3</button> 
               <button onClick={display} className={classes.buttons}>-</button> 
            </div>

            <div className={classes.rows}>
               <button onClick={display} className={classes.buttons}>4</button> 
               <button onClick={display} className={classes.buttons}>5</button> 
               <button onClick={display} className={classes.buttons}>6</button> 
               <button onClick={display} className={classes.buttons}>*</button> 
            </div>

            <div className={classes.rows}>
               <button onClick={display} className={classes.buttons}>7</button> 
               <button onClick={display} className={classes.buttons}>8</button> 
               <button onClick={display} className={classes.buttons}>9</button> 
               <button onClick={display} className={classes.buttons}>/</button> 
            </div>

            <div className={classes.rows}>
               <button className={classes.buttons}></button> 
               <button onClick={display} className={classes.buttons}>0</button> 
               <button className={classes.buttons}></button> 
               <button onClick={display} className={classes.buttons}>=</button> 
            </div>
        </div>
    )
}

export default Calculator;