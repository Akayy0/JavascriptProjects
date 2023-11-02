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

        const hour = document.getElementById('hour');
        const date = document.getElementById('date');

        const cordinate = await geolocation(location);

        const timeUrl = `https://timeapi.io/api/Time/current/coordinate?latitude=${cordinate.lat}&longitude=${cordinate.lon}`

        const response = await fetch(timeUrl);

        if (!response.ok) {
            throw new Error("Erro ao buscar informações de tempo");
        }

        const data = await response.json();

        console.log(data.time)
        console.log(data.date)

    } catch (err) {
        console.error(err)
    }

}

getTime("São paulo")

// TimeZoneDB