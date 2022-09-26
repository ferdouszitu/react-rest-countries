import React from 'react';
import './Country.css'


const Country = (props) => {
    console.log(props.country);
    const { name, population, region, capital, flags } = props.country;
    return (
        <div className='country bg-info'>
            <h1>Country name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <p><small>Population :{population}</small></p>
            <p><small>Continent : {region}</small></p>
            <p>Capital : {capital}</p>

        </div>
    );
};

export default Country;