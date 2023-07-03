// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}




// let loadCoord = async () => {
//     let data = await getCoord();
//     let lat = (data[0].lat);
//     let lon = (data[0].lon);
// }

let getData = async () => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&appid=a5defed1cf222f4f1c8876b6523a88f0`);
    return response.data;
};


let loadData = async () => {
    let data = await getData();
    console.log(data);
    let pic = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="...">`
    let header = `${searchText.value.toUpperCase()}`;
    let listItem = `<li>Currently ${Math.round(((data.main.temp) - 273.15) * 9/5 + 32)} &#8457</li>
                    <li>${data.weather[0].main}</li>
                    <li>High of ${Math.round(((data.main.temp_max) - 273.15) * 9/5 + 32)} &#8457</li>
                    <li>Low of ${Math.round(((data.main.temp_min) - 273.15) * 9/5 + 32)} &#8457</li>
                    <li>Humidity ${data.main.humidity}%</li>
    `;
    document.getElementById("pic").insertAdjacentHTML('afterbegin', pic);
    document.getElementById("header").insertAdjacentHTML('afterbegin', header);
    document.getElementById("weather_info").insertAdjacentHTML('afterbegin', listItem);
};




let searchText = document.getElementById("searchText");
let searchBtn = document.getElementById("searchBtn").addEventListener("click", loadData);