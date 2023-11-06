const geolocation = async (location) => {
    try {
        const city = encodeURIComponent(location);
        const apikey = "9fc96d52a596e2be108a8ac211a78c1b"
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`

        response = await fetch(url);

        if (!response.ok) {
            throw new Error("Deu erro ai irmao")
        }

        data = await response.json();

        const lat = data[0].lat.toFixed(1);
        const lon = data[0].lon.toFixed(2);

        return { lat, lon }

    } catch (err) {
        console.error(err)
    }
}

const getTime = async (location) => {
    try {
        const coordinates = await geolocation(location);
        const apiKey = "BHREFD4SVZ2J";
        const timezoneUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${coordinates.lat}&lng=${coordinates.lon}`;

        const response = await fetch(timezoneUrl);

        if (!response.ok) {
            throw new Error("Erro ao buscar informações de tempo");
        }

        const timezoneData = await response.json();

    
        const [date, time] = timezoneData.formatted.split(' ');
        
        const formattedTime = time.slice(0, 5);

        const [year, month, day] = date.split('-');
        const formattedDate = `${day}/${month}/${year}`;

    
        const hourElement = document.getElementById('hour');
        const dateElement = document.getElementById('date');


        hourElement.textContent = formattedTime; 
        dateElement.textContent = formattedDate; 

    } catch (err) {
        console.error(err);
    }
}

getTime("São Paulo");






