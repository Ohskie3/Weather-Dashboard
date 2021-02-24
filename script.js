document.getElementById('searchBtn').addEventListener('click', event => {
    event.preventDefault()
    
    let name = document.getElementById('search').value

  // a0facbfa14a51a09cfa5af1f8db212b0
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=imperial&appid=a0facbfa14a51a09cfa5af1f8db212b0`)
      .then(res => {
          let location = res.data
          console.log(location)

          document.getElementById('currentCity').innerHTML = `
            <h2>${location.city.name} (2/23/2021)</h2>
            <p>Temperature: ${location.list[0].main.temp} °F</p>
            <p>Humidity: ${location.list[0].main.humidity}%</P>
            <p>Wind speed: ${location.list[0].wind.speed} MPH</P>
            <p>UV index: </P>
            <hr>
          `
          document.getElementById('forecast').innerHTML = `
          <h2>5-Day Forecast:</h2>
          <div id="currentForecast">
          <p>3/24/2021</p>
          <p>Temp: ${location.list[3].main.temp} °F</p>
          <p>Humidity: ${location.list[3].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>3/25/2021</p>
          <p>Temp: ${location.list[11].main.temp} °F</p>
          <p>Humidity: ${location.list[11].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>3/26/2021</p>
          <p>Temp: ${location.list[19].main.temp} °F</p>
          <p>Humidity: ${location.list[19].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>3/27/2021</p>
          <p>Temp: ${location.list[27].main.temp} °F</p>
          <p>Humidity: ${location.list[27].main.humidity}%<p/>
          </div>
          <div id="currentForecast">
          <p>3/28/2021</p>
          <p>Temp: ${location.list[35].main.temp} °F</p>
          <p>Humidity: ${location.list[35].main.humidity}%<p/>
          </div>
          `


         document.getElementById('search').value = '' 
      })
      .catch(err => console.error(err))
})