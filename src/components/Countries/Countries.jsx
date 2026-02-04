import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/all')
            .then(res => res.json())
            .then(data => setCountries(data.countries))
            .catch(err => console.log(err))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country section')
        console.log(country);
    }

    return (
        <div>
            <h1>Countries</h1>
            <h4>Total Countries: {countries.length}</h4>
            <div>
                <h3>Visited Countries</h3>
                <ul>

                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;