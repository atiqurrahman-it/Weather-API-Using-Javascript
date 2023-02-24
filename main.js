
const WeatherInformationElement=document.getElementById('WeatherInformation')


const SearchBtn=document.getElementById('SearchBtn')
const CityNameElement=document.getElementById('CityNameId')


function WeatherApi(){
    const cityName=CityNameElement.value
    CityNameElement.value=''
    const key='8bbc87f00eca50610298990b22b5d8fd'
    // city name is empty
    if(cityName.length==0){
        WeatherInformationElement.innerHTML=`<h1> Please Enter Your Cite Name </h1>`
    }else{
        let apiLink=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
        fetch(apiLink)
        .then(res=>res.json())
        .then(data=>{
            // data not found
            if(data.cod==404){
                WeatherInformationElement.innerHTML=`<h1> City Not found </h1>`
            }else{
                displayData(data)
            }
        })
    }
}

function displayData(data){
    const weather_icon_code = data.weather[0]["icon"]
    WeatherInformationElement.innerHTML=`
    <h2 class='pt-2'>${data.name}</h2>
    <h4 class='pt-2'> ${ data.weather[0].description}</h4>
    <img src="http://openweathermap.org/img/w/${weather_icon_code}.png" <br>
    <h3 class='fw-bold'> ${data.main.temp} &deg;</h3>
    <p>Max</p>
    <p>${data.main.temp_max} </p>
    <p>min</p>
    <p>${data.main.temp_min}</p>
    `
    console.log(data)
}

//auto call WeatherApi when page load 
window.addEventListener('load',WeatherApi)
// WeatherApi function call when SearchBtn click 
SearchBtn.addEventListener('click',WeatherApi)




