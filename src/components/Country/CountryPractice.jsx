import '../Country/CountryPractice.css'
const CountryPractice = ({ country }) => {
    console.log(country)
    const { name, flags } = country;
    return (
        <div className="country-practice">
            <h3>Country Name: {name.common}</h3>
            <img src={flags.flags.png} alt="" />
        </div>
    );
};

export default CountryPractice;