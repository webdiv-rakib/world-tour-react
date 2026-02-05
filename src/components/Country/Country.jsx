import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'yellow' }}>Name: {name?.common}</h3>
            <img className='img-style' src={flags.flags.png} alt="" />
            <p>Population: {population.population}</p>
            <p>Area: {area.area}</p>
            <p><small>Code: {cca3.cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark as Visited</button><br />
            <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>Add Flag</button><br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;