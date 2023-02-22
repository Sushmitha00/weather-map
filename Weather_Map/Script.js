let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let Climate = document.getElementById("Climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");


searchButton.addEventListener('click',(e)=>
{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';

})

const getWeather=async (city)=>
{
    
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b72c28a7a2bb0b2daa6aaaf49eb8f924`,
        {mode:'cors'}
        );
        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main
        const{id,main}=weatherData.weather[0];
        console.log(id)
        loc.textContent=name;
        Climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);

        if(id<300 && id<200)
          {
            tempicon.src="./http://openweathermap.org/img/wn/11n@2x.png"
          }
          if(id<300 && id<200)
          {
            tempicon.src="http://openweathermap.org/img/wn/11n@2x.png"
          }

          else if(id<400 && id<300)
          {
            tempicon.src="http://openweathermap.org/img/wn/02n@2x.png"
          }

          else if(id<600 && id<500)
          {
            tempicon.src="http://openweathermap.org/img/wn/10n@2x.png"
          }

          else if(id<700 && id<600)
          {
            tempicon.src="http://openweathermap.org/img/wn/13n@2x.png"
          }

          else if(id<800 && id<700)
          {
            tempicon.src="http://openweathermap.org/img/wn/02n@2x.png"
          }

         else  if(id==800)
          {
            tempicon.src="http://openweathermap.org/img/wn/11n@2x.png"
          }
        }
          catch(error)
          {
            alert('City not found');
          }

};

