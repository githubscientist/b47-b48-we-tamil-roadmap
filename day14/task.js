// select the dropdowns
const countryDropdown = document.getElementById('countryDropdown');
const stateDropdown = document.getElementById('stateDropdown');
const districtDropdown = document.getElementById('districtDropdown');

const states = {
    india: ['tamilnadu', 'kerala', 'karnataka', 'andhra', 'telangana'],
    usa: ['california', 'torronto']
}

const districts = {
    tamilnadu: ['coimbatore', 'chennai', 'madurai'],
    california: ['xyz', 'abc']
}

let populateStates = (stateDropdown, data) => {
    stateDropdown.innerHTML = '';
    let option = document.createElement('option');
    option.text = '--select state--';
    stateDropdown.appendChild(option);
    data.forEach((state) => {
        let option = document.createElement('option');
        option.value = state;
        option.text = state;
        stateDropdown.appendChild(option);
    });

    // reset the districts
    districtDropdown.innerHTML = '';
    option = document.createElement('option');
    option.text = '--select district--';
    districtDropdown.appendChild(option);
}

let populateDistricts = (districtDropdown, data) => {
    districtDropdown.innerHTML = '';
    let option = document.createElement('option');
    option.text = '--select district--';
    districtDropdown.appendChild(option);
    data.forEach((district) => {
        let option = document.createElement('option');
        option.value = district;
        option.text = district;
        districtDropdown.appendChild(option);
    });
}

countryDropdown.addEventListener('change', function () {
    populateStates(stateDropdown, states[countryDropdown.value]);
});

stateDropdown.addEventListener('change', function () {
    populateDistricts(districtDropdown, districts[stateDropdown.value]); 
});