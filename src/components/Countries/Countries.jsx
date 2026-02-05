import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])



    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/all')
            .then(res => res.json())
            .then(data => setCountries(data.countries))
            .catch(err => console.log(err))
    }, [])



    const handleVisitedCountry = country => {
        // console.log('add this to your visited country section')
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flag => {
        // console.log('Flag Adding')
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove


    return (
        <div>
            <h1>Countries</h1>
            <h4>Total Countries: {countries.length}</h4>
            {/* Visited Countries */}
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* Visited Flags */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            {/* Display Countries */}
            <div className="country-container">
                {
                    countries.map((country, idx) => <Country
                        key={idx}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;