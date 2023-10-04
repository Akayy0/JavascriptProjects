
const getWeather = async () => {
    try{

        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Belo%20Horizonte&appid=9fc96d52a596e2be108a8ac211a78c1b&lang=pt')

        if(!response.ok){
            throw new Error('Erro ao buscar dados')
        }

        const data = await response.json()
        

        const temperaturaCelsius = (data.main.temp - 273.15).toFixed(2)

        const descrição = data.weather[0].description

        const windSpeed = data.wind.speed
        const humidity = data.main.humidity


        console.log(`Temperatura atual em ${data.name}:  ${temperaturaCelsius} C°`)

        console.log(`O tempo atualmente esta: ${descrição}`)

        console.log(`Velocidade do vento igual a : ${windSpeed}m/s, humidade de : ${humidity}%, e temperatura de ${temperaturaCelsius} C°`)
        

        if(temperaturaCelsius > 30){
            console.log(`Temperatura alta, atualmente: ${temperaturaCelsius} C°`)
        }else if(temperaturaCelsius < 10){
            console.log(`Temperatura baixa, atualmente: ${temperaturaCelsius} C°`)
        }

    }catch(error){
        console.error(error)

    }
}

getWeather()