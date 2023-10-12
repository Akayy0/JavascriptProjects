async function buscarPrevisao() {
    try {
        const cidadeInput = document.getElementById('pesquisa');
        const cidade = cidadeInput.value;

        if (cidade.trim() === '') {
            alert('Por favor, insira o nome de uma cidade');
            return
        }

        const apiKey = '9fc96d52a596e2be108a8ac211a78c1b';
        const cidadeCodificada = encodeURIComponent(cidade);
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeCodificada}&appid=${apiKey}&units=metric&lang=pt_br`;


        response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Nao foi possivel obter os dados')
        }

        data = await response.json();


        const temperatura = data.main.temp;
        const condicoesClimaticas = data.weather[0].description;
        const umidade = data.main.humidity;


        console.log(`Temperatura em ${cidade}: ${temperatura}°C`);
        console.log(`Condições climáticas em ${cidade}: ${condicoesClimaticas}`);
        console.log(`Umidade em ${cidade}: ${umidade}%`);

        const nomeCidadeElement = document.getElementById('nomeCidade');

        const temperaturaElement = document.getElementById('temperatura');

        temperaturaElement.classList.remove('high', 'low');

        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.style.display = 'block';
        img2.style.display = 'block';
        

        if (temperatura > 27) {
            temperaturaElement.classList.add('high')
            img1.style.display = 'none';

        } else if(temperatura <= 27) {
            temperaturaElement.classList.add('low')
            img2.style.display = 'none';
        }

        const condicoesClimaticasElement = document.getElementById('condicoesClimaticas');
        const quantidadeUmidadeElement = document.getElementById('quantidadeUmidade');

        nomeCidadeElement.textContent = `Condições atuais em ${cidade}`;
        temperaturaElement.textContent = `Temperatura: ${temperatura}°C`;
        condicoesClimaticasElement.textContent = `Condições climáticas: ${condicoesClimaticas}`;
        quantidadeUmidadeElement.textContent = `Umidade: ${umidade}%`;

        console.log(data)


    }
    catch (error) {
        console.error(error, error.message);
    }
    

}


