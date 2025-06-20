fetch(`https://rickandmortyapi.com/api/character`)
.then(response => response.json())
.then(data => {
    console.log(data);
    
})

fetch(`https://goweather.xyz/weather/paris`)
// .then(response => response.json())
.then(response => console.log(response));

fetch(`index.html`)
.then(response => console.log(response.json())
)
.then(response => console.log(response))