
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
    WeatherInformationElement.innerHTML=`
    <h2 class='pt-2'>Your City Name : ${data.name}</h2>
    `
    console.log(data)
}

//auto call WeatherApi when page load 
window.addEventListener('load',WeatherApi)
// WeatherApi function call when SearchBtn click 
SearchBtn.addEventListener('click',WeatherApi)




