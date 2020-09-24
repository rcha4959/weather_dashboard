var search = $(".search");
var input = $("#searchCity");

search.on("submit", retrieve);


function retrieve(e) {
    e.preventDefault();
    var city = input.val();
    console.log(city)
    var apiKey = "34920371ed8ec37190ff37babcba6eb1"
    var queryURl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;
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

        weatherIcon = data.weather[0].icon;
        console.log(data.weather[0].icon);
        iconURl = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
        var img = $("<img>")
        img.attr("src", iconURl)
        $("#icon").empty();
        $("#icon").append(img);

        var queryURl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5&units=metric&appid=" + apiKey;


        $.ajax({
            url: queryURl,
            Method: "GET"
        }).then(function (data) {
            console.log(data.list);

            for (var i = 0; i < 5; i++) {
                var humidityList = (data.list[i].main.humidity + "%")
                var tempList = (data.list[i].main.temp + "c")
                weatherIconList = (data.list[i].weather[0].icon);
                iconURlList = "http://openweathermap.org/img/wn/" + weatherIconList + "@2x.png";

                var img = $("<img>")
                img.attr("src", iconURlList)
                $("#fImg" + [i]).empty();
                $("#fImg" + [i]).append(img)
                $("#fTemp" + [i]).text(tempList)
                $("#fHumidity" + [i]).text(humidityList)
                $("#fDate" + [i]).text(data.list[i].dt_txt)




            }
        })

    })


}