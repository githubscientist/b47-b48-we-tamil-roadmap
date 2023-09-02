const apiKey = `9b3abd72af5e8ee4c215adb53b59b0e5`;

let form = document.getElementById('weatherForm');
let weatherInfo = document.getElementById('weatherInfo');
let recentSearchList = document.getElementById('recentSearchList');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let city = document.getElementById('city').value;

    getWeather(city);
});

async function getWeather(city) {
    // make a request to the api
    // get the details
    // parse the data to the html

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let data = await response.json();

        let iconID = data.weather[0].icon;
        let iconAlt = data.weather[0].description;
        let cityName = data.name;
        let temperature = data.main.temp;
        let windSpeed = data.wind.speed;

        let iconResponse = await fetch(`https://openweathermap.org/img/wn/${iconID}@2x.png`);

        let iconBlob = await iconResponse.blob();
        let iconUrl = URL.createObjectURL(iconBlob);

        console.log(data);
        let card = `
            <div class="col-lg-4 col-sm-6 col-md-6 mb-4">
                <div class="card" style="width: 18rem;">
                    <img src="${iconUrl}" class="card-img-top" alt="${iconAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${cityName}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Temperature:</b> ${temperature}</li>
                        <li class="list-group-item"><b>Description:</b> ${iconAlt}</li>
                        <li class="list-group-item"><b>Wind Speed:</b> ${windSpeed}</li>
                    </ul>
                </div>
            </div>
        `;
        weatherInfo.innerHTML = card;

        let listItem = document.createElement('li');
        listItem.textContent = cityName;
        recentSearchList.appendChild(listItem);
        
    } catch (error) {
        console.error('error fetching details', error);
    }
}