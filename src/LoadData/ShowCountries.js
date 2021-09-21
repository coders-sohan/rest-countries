import React from 'react';
import './Countries.css';

const ShowCountries = (props) => {
    return (
        <div className="single-country">
            <h2>Country Name: {props.name}</h2>
            <h3>Capital: {props.capital}</h3>
            <p>Population: {props.population}</p>
            <img src={props.flag} alt="" width="200px" />
        </div>
    );
};

export default ShowCountries;