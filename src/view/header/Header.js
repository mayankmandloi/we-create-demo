import React, { useState, useEffect } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { getData } from '../../repository/getjoke';

export const Header = (props) => {

    const [randomText, setRandomText] = useState('');
    const getJokeData= async () => {
        const text = await getData();
        setRandomText(text);
    } 
    useEffect(() => {
        getJokeData()
    },[])
    return ([
        <div className="header-left">
            <Link to={props.goto} className="simple-link">{props.goto}</Link>,
            <h2>Product Design</h2>
            <p>Implement/design below page with css(don’t use bootstrap) and React-Redux. Make fake api calls with waiting of 2-3 seconds and after that return hardcoded data. Page design should be mobile friendly.</p>
            <p>{randomText}</p>
        </div>,
        <div className="header-right">
        </div>
    ]);
}