const apiKey = "3300df363ebb523bd7a4b4555bebbf2d";
let inputCity;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=imperial`;

const formSubmission = document.querySelector("input")

const weatherForm = document.getElementById("weather_form")

let temp, feelsLike, city, countryCode, icon, description

weatherForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(formSubmission.value)
    inputCity = formSubmission.value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=imperial`;
    console.log(inputCity)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.main.feels_like)
            feelsLike = data.main.feels_like;
            temp = data.main.temp;
            city = data.name;
            countryCode = data.sys.country;
            icon = `${data.weather[0].icon}.png`;
            description = data.weather[0].description;
            return data
        })
        .then((data) => {
            let cityCard = `
            <div class="card">
                <div class="container">
                    <h5>City: ${city}</h5>
                    <h6>Country Code: ${countryCode}</h6>
                    <img src="http://openweathermap.org/img/wn/${icon}" alt="Avatar" style="width:100%">
                    <p>Description: ${description}</p>
                    <p>Temperature: ${temp}</p>
                    <p>Feels Like: ${feelsLike}</p>
                </div>
            </div>
            `;
            document.querySelector(".card_container").innerHTML = cityCard
        })
        .catch((err) => {
            console.log(error)
        })
});



