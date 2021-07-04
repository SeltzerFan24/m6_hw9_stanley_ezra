const formSubmission = document.querySelector("input")

formSubmission.addEventListener("submit", e => {
    e.preventDefault();
    const inputCity = input.value;
});

const apiKey = "3300df363ebb523bd7a4b4555bebbf2d";
const inputCity = input.value;
const url = "api.openweathermap.org/data/2.5/weather?q={inputCity}&appid={apiKey}&units=imperial";