//-----Data Fatching from API
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data)) //data = argument // countries = parameter
}

//-----Data Display
const displayCountries = countries =>{
    //console.log(countries);
    const allCountriesHTML = countries.map(country=>getCountryHTML(country))
    //console.log(allCountriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

//-----UI Data Display
const getCountryHTML = (singleCountry) =>{
    return `
        <div class="singleCountryStyle">
            <h2>Country Name: <span>${singleCountry.name.common}</span></h2>
            <img src="${singleCountry.flags.png}">
        </div>
    `
}

//-----Main Function Call
loadCountries();
