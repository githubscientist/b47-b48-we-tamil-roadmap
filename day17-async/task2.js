// select the country list drop down
let countrySelect = document.getElementById('countrySelect');
let capitalParagraph = document.getElementById('capitalParagraph');

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then((countries) => {
        console.log(countries);
        for (let country of countries) {
            // console.log(country.name.common);
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;

            countrySelect.appendChild(option);
        }

        countrySelect.addEventListener('change', () => {
            // console.log(countrySelect.value);
            const selectedCountry = countrySelect.value;

            const selectedCountryData = countries.find(country => country.name.common === selectedCountry);

            console.log(selectedCountryData.capital.join('\n'));
            capitalParagraph.innerText = `Capital: \n${selectedCountryData.capital.join('\n')}`;
        })
    })
    .catch(error => console.error('error fetching data:', error));