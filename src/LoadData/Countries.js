import React, { useEffect, useState } from 'react';
import ShowCountries from './ShowCountries';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[]);
    return (
        <div className="main-container">
            <h1>List of countries in the world!!!</h1>
            <h3>There are <span>{countries.length}</span> countries</h3>
            <div className="counties">
                {
                    countries.map(country => <ShowCountries name={country.name} capital={country.capital} population={country.population} flag={country.flag} key={country.name}></ShowCountries>)
                }
            </div>
        </div>
    );
};

export default Countries;