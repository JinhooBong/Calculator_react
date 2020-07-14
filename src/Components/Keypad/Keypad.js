import React, { Component } from 'react';
import classes from "../Keypad/Keypad.module.css";

class Keypad extends Component {
    render() {
        return (
            <div>
                <div className={classes.rows}>
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>C</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>+/-</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>.</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>+</button> 
                </div>

                <div className={classes.rows}>
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>1</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>2</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>3</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>-</button> 
                </div>

                <div className={classes.rows}>
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>4</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>5</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>6</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>*</button> 
                </div>

                <div className={classes.rows}>
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>7</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>8</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>9</button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>/</button> 
                </div>

                <div className={classes.rows}>
                    <button className={classes.buttons}></button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>0</button> 
                    <button className={classes.buttons}></button> 
                    <button onClick={e => this.props.onClick(e.target.name)} className={classes.buttons}>=</button> 
                </div>
            </div>
        )
    }
}

export default Keypad;