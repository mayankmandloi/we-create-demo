import React from 'react';
import "./Section.css";

export const Section = (props) => {
    return (
        <div className="section">
        {props.children}
        </div>
    )
}