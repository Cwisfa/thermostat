
document.addEventListener('DOMContentLoaded', function (event) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.weather[0].description);
            document.querySelector('#currentTemperature').innerText = Math.ceil(data.main.temp) + "°c";
            document.querySelector('#currentCity').innerText = data.name;
            document.querySelector('#currentConditions').innerText = data.weather[0].description;
        });
    thermostat = new Thermostat();
    document.getElementById('powerStatus').innerHTML = ("Power Saving: OFF <br> MAX TEMP: 25°c")
    document.getElementById('tempNumber').innerHTML = (thermostat.temperature + " °c ");
    energyUsage();
});

function increaseTemp() {
    document.getElementById('increaseTemp');
    thermostat.increaseTemp(1);
    console.log("Temp increased by 1 degrees");
    document.getElementById('tempNumber').innerHTML = (thermostat.temperature + " °c ");
    energyUsage();
}

function decreaseTemp() {
    document.getElementById('decreaseTemp');
    thermostat.decreaseTemp(1);
    console.log("Temp decreased by 1 degrees");
    document.getElementById('tempNumber').innerHTML = (thermostat.temperature + " °c ");
    energyUsage();
}

function resetTemp() {
    thermostat.resetTemp();
    console.log("Temp reset to default(20 degrees)");
    document.getElementById('tempNumber').innerHTML = (thermostat.temperature + " °c ");
    energyUsage();
}

function powerModeOn() {
    thermostat.powerSavingOn();
    console.log("Power Saving Mode On");
    document.getElementById('powerStatus').innerHTML = ("Power Saving: ON <br> MAX TEMP: 25°c")
    if (thermostat.temperature > 25) {
        thermostat.temperature = 25
    }
    document.getElementById('tempNumber').innerHTML = (thermostat.temperature + " °c ");
    energyUsage()
}

function powerModeOff() {
    thermostat.powerSavingOff();
    console.log("Power Saving Mode Off");
    document.getElementById('powerStatus').innerHTML = ("Power Saving: OFF <br> MAX TEMP: 32°c")
    document.getElementById('tempNumber').innerHTML = (thermostat.temperature + " °c ");
    energyUsage();
}

function energyUsage() {
    if (thermostat.temperature < 18) {
        document.getElementById('powerUsage').style.backgroundColor = "rgba(144, 245, 150, 0.52)";
    } else if (thermostat.temperature <= 25) {
        document.getElementById('powerUsage').style.backgroundColor = "rgba(252, 140, 3, 0.52)";
    } else {
        document.getElementById('powerUsage').style.backgroundColor = "rgba(255, 3, 3, 0.52)";
    }
}