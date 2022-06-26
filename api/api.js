import axios from 'axios';

const KEY = '410dcf939f944d9196194035222106';
const API = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&lang=ru&days=7`;

export async function getCurrentWeather(lat, lon, method) {
    axios
      .get(`${API}&q=${lat},${lon}&days=7`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        method(data)
        // return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  