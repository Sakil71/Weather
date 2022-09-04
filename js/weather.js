const keyApi = '68c28f8be9574c7f9ef3bf0b738870aa';

const loadData = city =>{
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`;
    fetch(urlApi)
    .then(res => res.json())
    .then(data => displayWeather(data))
}
const displayWeather = data =>{
    console.log(data);
    const temperatureContainer = document.getElementById('temperature-container');
    temperatureContainer.innerHTML = `
        <h1>${data.name} <span class="fs-5 fw-bold text-light"> ${data.sys.country} </span> </h1>
        <h3><span>${data.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
    `
    
}

document.getElementById('search-button').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const city = inputField.value;
    loadData(city);
})

loadData('dhaka');