import { useEffect, useState } from "react";
import CountryPractice from "../Country/CountryPractice";

const CountriesPractice = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/all')
            .then(res => res.json())
            .then(data => setCountries(data.countries))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h3>Country Visited: {countries.length}</h3>
            {
                countries.map(country => <CountryPractice country={country} key={country.cca3}></CountryPractice>)
            }
        </div>
    );
};

export default CountriesPractice;