document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()
    
    let name = document.getElementById('search').value

  axios.get(`put URL here`)
      .then(res => {
          let location = res.data
          console.log(location)


         document.getElementById('search').value = '' 
      })
      .catch(err => console.error(err))
})