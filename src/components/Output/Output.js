import React from 'react';
import './Output.css';

const Output = (props) => {
    return (
        <div className = 'output'>
            {props.input}
        </div>
    );
}

export default Output;
