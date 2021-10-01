import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const { area, capital, region, subregion, population,flags } = props.country;
    const flagStyle ={height:'90px', width:'130px'}
    const CountryStyle = {border: '3px solid lightBlue',margin: '10px',padding: '10px', borderRadius: '7px'}
    return (
        <div style={CountryStyle}>
            <h1>this country name: { props.country.name.common} </h1>
            <h2>This county area is:{area } </h2>
            <h3> this is capital: {capital}</h3>
            <p> this region: {region}</p>
            <p> this Subregion: {subregion}</p>
          <img style = {flagStyle} src={flags.png} alt="" />
            <h2>population : { population} </h2>

        </div>
    );
};

export default Country;