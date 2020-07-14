import React, { Component } from 'react';
import classes from '../DisplayComp/DisplayComp.module.css';

class DisplayComp extends Component {
    render() {
        return (
            <div className={classes.displayBox}>
                <p>Result</p>
            </div>
        )
    }
}

export default DisplayComp;