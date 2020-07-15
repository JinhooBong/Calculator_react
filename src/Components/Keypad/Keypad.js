import React from 'react';
import classes from "../Keypad/Keypad.module.css";

function Keypad() {
    return (
        <div>
            <div className={classes.rows}>
                <button className={classes.buttons}>C</button> 
                <button className={classes.buttons}>+/-</button>
                <button className={classes.buttons}>.</button> 
                <button className={classes.buttons}>+</button> 
            </div>

            <div className={classes.rows}>
                <button className={classes.buttons}>1</button> 
                <button className={classes.buttons}>2</button> 
                <button className={classes.buttons}>3</button> 
                <button className={classes.buttons}>-</button> 
            </div>

            <div className={classes.rows}>
                <button className={classes.buttons}>4</button> 
                <button className={classes.buttons}>5</button> 
                <button className={classes.buttons}>6</button> 
                <button className={classes.buttons}>*</button> 
            </div>

            <div className={classes.rows}>
                <button className={classes.buttons}>7</button> 
                <button className={classes.buttons}>8</button> 
                <button className={classes.buttons}>9</button> 
                <button className={classes.buttons}>/</button> 
            </div>

            <div className={classes.rows}>
                <button className={classes.buttons}></button> 
                <button className={classes.buttons}>0</button> 
                <button className={classes.buttons}></button> 
                <button className={classes.buttons}>=</button> 
            </div>
        </div>
    )
}

export default Keypad;