let allItems = {};
let currentDate = new Date();
const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December",];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let search = document.getElementById('search')
async function getWeather(zone) {
  let apiResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${zone}`
  );
  let finalResult = await apiResponse.json();
  allItems = finalResult;
    displayData()
}
search.addEventListener("keyup",  function () {
 getWeather(search.value);
});
function displayData() {
    document.getElementById("location").innerHTML=allItems.location.name
  document.getElementById("deg").innerHTML = `${allItems.current.temp_c}<sup>o</sup>c`;
  document.getElementById('condition').innerHTML = allItems.current.condition.text
  document.getElementById('condition').previousElementSibling.src=allItems.current.condition.icon
  document.getElementById('thisDay').innerHTML=days[currentDate.getDay()]
  document.getElementById('dayOfMonth').innerHTML=currentDate.getDate()
  document.getElementById('thisDay').nextElementSibling.innerHTML=monthNames[currentDate.getMonth()]
  document.getElementById('thatDay').innerHTML=days[currentDate.getDay()]
  document.getElementById('nextDay').innerHTML=days[currentDate.getDay()+1]
  document.getElementById('maxDegree').previousElementSibling.firstElementChild.src=allItems.forecast.forecastday[0].day.condition.icon
  document.getElementById('maxDegree').innerHTML=`${allItems.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>c`
  document.getElementById('minDegree').innerHTML=`${allItems.forecast.forecastday[0].day.mintemp_c}<sup>o</sup>`
  document.getElementById('minDegree').nextElementSibling.innerHTML=allItems.forecast.forecastday[0].day.condition.text
  document.getElementById('thatMaxDegree').innerHTML=`${(allItems.forecast.forecastday[0].day.maxtemp_c)+1}<sup>o</sup>c`
  document.getElementById('thatMinDegree').innerHTML=`${(allItems.forecast.forecastday[0].day.mintemp_c)+1}<sup>o</sup>`
  document.getElementById('thatMaxDegree').nextElementSibling=allItems.forecast.forecastday[0].day.condition.text
  document.getElementById('thatMaxDegree').previousElementSibling.firstElementChild.src=allItems.forecast.forecastday[0].day.condition.icon
  
  
}
getWeather('cairo')
console.log(currentDate.getDate());