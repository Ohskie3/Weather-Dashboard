document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()
    
    let name = document.getElementById('search').value

  axios.get(`put URL here`)
      .then(res => {
          let location = res.data
          console.log(location)

          document.getElementById('currentCity').innerHTML = `
            <h2></h2>
            <p></p>
            <p></P>
            <p></P>
            <p></P>
          `
          document.getElementById('forecast').innerHTML = `
          <h2>5-Day Forecast:
          
          `


         document.getElementById('search').value = '' 
      })
      .catch(err => console.error(err))
})