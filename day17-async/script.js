// Task 1: List all the countries

// - Retrieve and display all the names of the countries available in the API
// https://restcountries.com/v3.1/all

fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((countries) => {
        console.log(countries);
        // select the ordered list
        let countryList = document.getElementById('countryList');
        for (let country of countries) {
            // console.log(country.name.common);
            let countryListItem = document.createElement('li');
            countryListItem.textContent = country.name.common;
            countryList.appendChild(countryListItem);
        }
    })
    .catch((error) => {
        console.error('error fetching data:', error);
    })