import React from 'react';
import classes from '../DisplayComp/DisplayComp.module.css';

function DisplayComp(props) {
    return (
        <div className={classes.displayBox}>
            {props.children}
        </div>
    )
}

export default DisplayComp;