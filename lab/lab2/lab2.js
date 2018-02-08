var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("getWeatherButton").style.display = "none";
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}
