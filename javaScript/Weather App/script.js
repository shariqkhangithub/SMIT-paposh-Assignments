
const API_KEY = 'fAXYV1VWyjeS9atwt9aL6cQdVoqTwdu4'
const form = document.querySelector("#form");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityInput = document.querySelector("#input");
    const cityTitle = document.querySelector(".city");
    const weatherText = document.querySelector(".weather-text");
    const temp = document.querySelector(".temp");
    const time = document.querySelector(".time");
    const tempF = document.querySelector(".fara");
    const tempC = document.querySelector(".cel");
    const icon = document.querySelector(".weather-icon");

    let city = cityInput.value;

    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            let cityData = data[0];

            return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${API_KEY}`)
                .then((response) => response.json())
                .then((data) => {
                    let currenData = data[0];

                    cityTitle.innerHTML = city;
                    weatherText.innerHTML = currenData.WeatherText;
                    temp.innerHTML = `${currenData.Temperature.Metric.Value}°${currenData.Temperature.Metric.Unit}`;

                    const dateObj = new Date(currenData.LocalObservationDateTime);
                    const formattedcityTime = dateObj.toLocaleString("en-US", {
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    });
                    time.innerHTML = formattedcityTime;

                    tempF.innerHTML = `${currenData.Temperature.Imperial.Value}°${currenData.Temperature.Imperial.Unit}`;
                    tempC.innerHTML = `${currenData.Temperature.Metric.Value}°${currenData.Temperature.Metric.Unit}`;

                    cityInput.value = "";
                });
        });
});
