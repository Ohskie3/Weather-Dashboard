

  let cityArr = JSON.parse(localStorage.getItem('savedCities')) || []

console.log(cityArr)
for (let i=0; i <cityArr.length; i++){
  let cityElem = document.createElement('li')
cityElem.className = 'list-group-item'
cityElem.textContent = cityArr[i]
document.getElementById('cityList').append(cityElem)

}
document.getElementById('searchBtn').addEventListener('click', event => {
    event.preventDefault()
    
    let name = document.getElementById('search').value
    let currentTime = new Date()
  
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=imperial&appid=a0facbfa14a51a09cfa5af1f8db212b0`)
      .then(res => {
          let location = res.data
          console.log(location)

          let cityElem = document.createElement('li')
          cityElem.className = 'list-group-item'
          cityElem.textContent = document.getElementById('search').value
          document.getElementById('cityList').append(cityElem)

          document.getElementById('currentCity').innerHTML = `
            <h2>${location.city.name}, ${currentTime.toDateString()} <img src="http://openweathermap.org/img/wn/${location.list[0].weather[0].icon}@2x.png"></h2>
            <p>Temperature: ${location.list[0].main.temp} °F</p>
            <p>Humidity: ${location.list[0].main.humidity}%</P>
            <p>Wind speed: ${location.list[0].wind.speed} MPH</P>
            <p>UV index: </P>
            <hr>
          `
          document.getElementById('forecast').innerHTML = `
          <h2>5-Day Forecast:</h2>
          <div id="currentForecast">
          <p>${location.list[3].dt_txt}</p>
          
          <p>Temp: ${location.list[3].main.temp} °F</p>
          <p>Humidity: ${location.list[3].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[11].dt_txt}</p>
          
          <p>Temp: ${location.list[11].main.temp} °F</p>
          <p>Humidity: ${location.list[11].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[19].dt_txt}</p>
          
          <p>Temp: ${location.list[19].main.temp} °F</p>
          <p>Humidity: ${location.list[19].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[27].dt_txt}</p>
          
          <p>Temp: ${location.list[27].main.temp} °F</p>
          <p>Humidity: ${location.list[27].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[35].dt_txt}</p>
          
          <p>Temp: ${location.list[35].main.temp} °F</p>
          <p>Humidity: ${location.list[35].main.humidity}%<p/>
          </div>
          `

         cityArr.push(name)
         localStorage.setItem('savedCities', JSON.stringify(cityArr))
         document.getElementById('search').value = '' 
      })
      .catch(err => console.error(err))
      

})

      // searched cities click
      document.addEventListener('click', event => {
        // console.log(event.target.textContent)
        
    if (event.target.classList.contains('list-group-item')) {
      
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${event.target.textContent}&units=imperial&appid=a0facbfa14a51a09cfa5af1f8db212b0`)
        .then(res => {
          let location = res.data
          console.log(location)
          let currentTime = new Date()

          document.getElementById('currentCity').innerHTML = `
            <h2>${location.city.name}, ${currentTime.toDateString()} <img src="http://openweathermap.org/img/wn/${location.list[0].weather[0].icon}@2x.png"></h2>
            <p>Temperature: ${location.list[0].main.temp} °F</p>
            <p>Humidity: ${location.list[0].main.humidity}%</P>
            <p>Wind speed: ${location.list[0].wind.speed} MPH</P>
            <p>UV index: </P>
            <hr>
          `
          document.getElementById('forecast').innerHTML = `
          <h2>5-Day Forecast:</h2>
          <div id="currentForecast">
          <p>${location.list[3].dt_txt}</p>
          <p>Temp: ${location.list[3].main.temp} °F</p>
          <p>Humidity: ${location.list[3].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[11].dt_txt}</p>
          
          <p>Temp: ${location.list[11].main.temp} °F</p>
          <p>Humidity: ${location.list[11].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[19].dt_txt}</p>
          
          <p>Temp: ${location.list[19].main.temp} °F</p>
          <p>Humidity: ${location.list[19].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[27].dt_txt}</p>
          
          <p>Temp: ${location.list[27].main.temp} °F</p>
          <p>Humidity: ${location.list[27].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>${location.list[35].dt_txt}</p>
          
          <p>Temp: ${location.list[35].main.temp} °F</p>
          <p>Humidity: ${location.list[35].main.humidity}%<p/>
          </div>
          `
        })
        .catch(err => console.error(err))
        
      }
    })
    
    
  
  // < img src = "${location.list[3].weather[0].icon} alt="${ location.list[3].weather[0].description } ">