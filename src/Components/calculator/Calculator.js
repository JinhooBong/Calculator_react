import React from "react";
import classes from "../calculator/Calculator.module.css";

function Calculator() {
    return(
        <div className={classes.calculator}>
            <div className={classes.displayBox}>

            </div>
            <div className={classes.rows}>
               <div className={classes.buttons}>C</div> 
               <div className={classes.buttons}>+/-</div>
               <div className={classes.buttons}>.</div> 
               <div className={classes.buttons}>+</div> 
            </div>

            <div className={classes.rows}>
               <div className={classes.buttons}>1</div> 
               <div className={classes.buttons}>2</div> 
               <div className={classes.buttons}>3</div> 
               <div className={classes.buttons}>-</div> 
            </div>

            <div className={classes.rows}>
               <div className={classes.buttons}>4</div> 
               <div className={classes.buttons}>5</div> 
               <div className={classes.buttons}>6</div> 
               <div className={classes.buttons}>*</div> 
            </div>

            <div className={classes.rows}>
               <div className={classes.buttons}>7</div> 
               <div className={classes.buttons}>8</div> 
               <div className={classes.buttons}>9</div> 
               <div className={classes.buttons}>/</div> 
            </div>

            <div className={classes.rows}>
               <div className={classes.buttons}></div> 
               <div className={classes.buttons}>0</div> 
               <div className={classes.buttons}></div> 
               <div className={classes.buttons}>=</div> 
            </div>
        </div>
    )
}

export default Calculator;