import React from 'react';
import './style.css';


function Section (props){
    return(
        <div className='section' id={props.section}>
            {props.children}
        </div>

    )
}

export default Section;