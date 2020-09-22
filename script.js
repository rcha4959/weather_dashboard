var search = $(".search");
var input = $("#searchCity");

search.on("submit", retrieve);


function retrieve(e) {
    var city = input.val();
    console.log(city)
    var apiKey = "34920371ed8ec37190ff37babcba6eb1"
    var queryURl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;

    e.preventDefault();


    $.ajax({
        url: queryURl,
        Method: "GET"
    }).then(function (data) {
        console.log(data);
        var temperature = $("#temp");
        var humid = $("#humidity");
        var windSpeed = $("#wind");

        $(temperature).text("Temperature(c): " + data.main.temp)
        $(humid).text("Humidity(%): " + data.main.humidity)
        $(windSpeed).text("Wind Speed(m/s): " + data.wind.speed)

    })


}