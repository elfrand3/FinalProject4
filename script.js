const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');


searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')
            result.innerHTML = `<h2 style="margin-bottom: 15px;">City : ${response.name}</h2>
                                <p style="margin-bottom: 17px;">Conditions : ${response.clouds.all}%</p>
                                <p style="margin-bottom: 17px;">Temperature : ${response.main.temp_max}°С</p>
                                <p>Wind Speed : ${response.wind.speed} km/h</p>`
        })
    inputKeyword.value = null;

})