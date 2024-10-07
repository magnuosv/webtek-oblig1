async function fetchData() {
    try {
        //OSLO
        const osloResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=59.9127&longitude=10.7461&current_weather=true`);
        const osloData = await osloResponse.json();

        const oslo = document.getElementById("oslo");

        oslo.innerHTML = `
            <h4>Oslo</h4>
            <p>Temperature: ${osloData.current_weather.temperature}${osloData.current_weather_units.temperature}</p>
            <p>Wind: ${osloData.current_weather.windspeed}${osloData.current_weather_units.windspeed}</p>
        `;

        //TOKYO
        const tokyoResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true`);
        const tokyoData = await tokyoResponse.json();

        const tokyo = document.getElementById("tokyo");

        tokyo.innerHTML = `
            <h4>Tokyo</h4>
            <p>Temperature: ${tokyoData.current_weather.temperature}${tokyoData.current_weather_units.temperature}</p>
            <p>Wind: ${tokyoData.current_weather.windspeed}${tokyoData.current_weather_units.windspeed}</p>
        `;

        //LONDON
        const londonResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true`);
        const londonData = await londonResponse.json();

        const london = document.getElementById("london");

        london.innerHTML = `
            <h4>London</h4>
            <p>Temperature: ${londonData.current_weather.temperature}${londonData.current_weather_units.temperature}</p>
            <p>Wind: ${londonData.current_weather.windspeed}${londonData.current_weather_units.windspeed}</p>
        `;

        //BERLIN
        const berlinResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current_weather=true`);
        const berlinData = await berlinResponse.json();

        const berlin = document.getElementById("berlin");

        berlin.innerHTML = `
            <h4>Berlin</h4>
            <p>Temperature: ${berlinData.current_weather.temperature}${berlinData.current_weather_units.temperature}</p>
            <p>Wind: ${berlinData.current_weather.windspeed}${berlinData.current_weather_units.windspeed}</p>
        `;

        //MOSCOW
        const moscowResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&current_weather=true`);
        const moscowData = await moscowResponse.json();

        const moscow = document.getElementById("moscow");

        moscow.innerHTML = `
            <h4>Moscow</h4>
            <p>Temperature: ${moscowData.current_weather.temperature}${moscowData.current_weather_units.temperature}</p>
            <p>Wind: ${moscowData.current_weather.windspeed}${moscowData.current_weather_units.windspeed}</p>
        `;

        //SYDNEY
        const sydneyResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-33.8678&longitude=151.2073&current_weather=true`);
        const sydneyData = await sydneyResponse.json();

        const sydney = document.getElementById("sydney");

        sydney.innerHTML = `
            <h4>Sydney</h4>
            <p>Temperature: ${sydneyData.current_weather.temperature}${sydneyData.current_weather_units.temperature}</p>
            <p>Wind: ${sydneyData.current_weather.windspeed}${sydneyData.current_weather_units.windspeed}</p>
        `;

    } catch (error) {
        console.error(error);
    }
}

//Dataen oppdateres hvert minutt
fetchData();
let myInterval = setInterval(fetchData, 60000);
