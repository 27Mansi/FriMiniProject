
$(document).ready(function () {
    $(document).ready(function () {

        $.ajax({
            type: 'GET',
            dataType: 'json',
            //openweathermap.org weather API
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=Pune&appid=d02c9e4fd9949e07b7e47dfb6bcb3d31&units=metric',
            success: (res) => {
                var sec1 = ''
                var sec2 = ''
                var sunrise = res.city.sunrise;
                var sunset = res.city.sunset;
                var riseDate = new Date(sunrise * 1000);
                var setDate = new Date(sunset * 1000);
    
                var riseTime = riseDate.toLocaleTimeString();
                var setTime = setDate.toLocaleTimeString();
                
                var iconUrl = 'http://openweathermap.org/img/w/' + res.list[1].weather[0].icon + '.png'
                console.log(res);
                sec1 +=
                    `            
                    <p class="row text-center">  
                        <h1 class="temprature display-4">${res.list[0].main.temp}</h1>
                            <a href="index.html">&#8451;</a> |
                            <a href="index.html">&#8457;</a>                        
                        </sup> 
                    </p>
                    <p class="row">
                        <img class="ml-5 pb-2" src="${iconUrl}" style="width: 120px;
                        height: auto;">
                    </p>                       
                    `
                $('.ct1sec1').append(sec1)
                sec2 +=
                    `
                        <p class="row display-4 text-center place pl-2">${res.city.name}, ${res.city.country}</p>
                        <div class="row">
                            <div class="col-5 border-right">
                                <p>
                                    
                                    <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                    <i class="fas fa-arrow-up"></i>  
                                    ${res.list[0].main.temp_max}&#8451;<br>
                                    <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                    <i class="fas fa-arrow-down"></i>                            
                                    ${res.list[0].main.temp_min}&#8451;<br>
                                    <i class="fas fa-wind fa-lg"></i> ${res.list[0].wind.speed} mt/sec <br>
                                    <img src="assets/sunrise.png" style="width:30px;height:auto"></img>     ${riseTime}<br>
                                    <img src="assets/sunset.png" style="width:25px;height:auto"></img>     ${setTime}
                                </p>
                            </div>
                            <div class="col-3 border-right">
                                <table>
                                    <tr>
                                        <td><img src="assets/cloud.png" style="width:30px;height:auto"></img> </td>
                                        <td> ${res.list[0].clouds.all}% </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/humidity1.png" style="width:30px;height:auto"></img> </td>
                                        <td>  ${res.list[1].main.humidity}%  </td>
                                    </tr>                                  
                                </table> 
                            </div>
                            <div class="col-3">
                                <table>
                                    <tr>
                                        <td><img src="assets/9am.webp" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly"> ${res.list[0].main.temp}&#8451; </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/12pm.png" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[1].main.temp}&#8451;  </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/3pm.webp" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[2].main.temp}&#8451;  </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/6pm.png" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[3].main.temp}&#8451;  </td>
                                    </tr>                                    
                                </table>   
                            </div>                                                                 
                    `
                $('.ct1sec2').append(sec2)
    
            }
        })
        //     <div class="col-6">
        //     
        //        
        // </div>
        $.ajax({
            type: 'GET',
            dataType: 'json',
            //openweathermap.org weather API
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=d02c9e4fd9949e07b7e47dfb6bcb3d31&units=metric',
            success: (res) => {
                var sec1 = ''
                var sec2 = ''
                var sunrise = res.city.sunrise;
                var sunset = res.city.sunset;
                var riseDate = new Date(sunrise * 1000);
                var setDate = new Date(sunset * 1000);
    
                var riseTime = riseDate.toLocaleTimeString();
                var setTime = setDate.toLocaleTimeString();
                
                var iconUrl = 'http://openweathermap.org/img/w/' + res.list[1].weather[0].icon + '.png'
                console.log(res);
                sec1 +=
                    `            
                    <p class="row text-center">  
                        <h1 class="temprature display-4">${res.list[0].main.temp}</h1>
                            <a href="index.html">&#8451;</a> |
                            <a href="index.html">&#8457;</a>                        
                        </sup> 
                    </p>
                    <p class="row">
                        <img class="ml-5 pb-2" src="${iconUrl}" style="width: 120px;
                        height: auto;">
                    </p>                       
                    `
                $('.ct2sec1').append(sec1)
                sec2 +=
                    `
                        <p class="row display-4 text-center place pl-2">${res.city.name}, ${res.city.country}</p>
                        <div class="row">
                            <div class="col-5 border-right">
                                <p>
                                    
                                    <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                    <i class="fas fa-arrow-up"></i>  
                                    ${res.list[0].main.temp_max}&#8451;<br>
                                    <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                    <i class="fas fa-arrow-down"></i>                            
                                    ${res.list[0].main.temp_min}&#8451;<br>
                                    <i class="fas fa-wind fa-lg"></i> ${res.list[0].wind.speed} mt/sec <br>
                                    <img src="assets/sunrise.png" style="width:30px;height:auto"></img>     ${riseTime}<br>
                                    <img src="assets/sunset.png" style="width:25px;height:auto"></img>     ${setTime}
                                </p>
                            </div>
                            <div class="col-3 border-right">
                                <table>
                                    <tr>
                                        <td><img src="assets/cloud.png" style="width:30px;height:auto"></img> </td>
                                        <td> ${res.list[0].clouds.all}% </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/humidity1.png" style="width:30px;height:auto"></img> </td>
                                        <td>  ${res.list[1].main.humidity}&#8451;  </td>
                                    </tr>                                  
                                </table> 
                            </div>
                            <div class="col-3">
                                <table>
                                    <tr>
                                        <td><img src="assets/9am.webp" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly"> ${res.list[0].main.temp}&#8451; </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/12pm.png" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[1].main.temp}&#8451;  </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/3pm.webp" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[2].main.temp}&#8451;  </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/6pm.png" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[3].main.temp}&#8451;  </td>
                                    </tr>                                    
                                </table>   
                            </div>                                                                 
                    `
                $('.ct2sec2').append(sec2)
            }
        })
    
        $.ajax({
            type: 'GET',
            dataType: 'json',
            //openweathermap.org weather API
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=nagpur&appid=d02c9e4fd9949e07b7e47dfb6bcb3d31&units=metric',
            success: (res) => {
                var sec1 = ''
                var sec2 = ''
                var sunrise = res.city.sunrise;
                var sunset = res.city.sunset;
                var riseDate = new Date(sunrise * 1000);
                var setDate = new Date(sunset * 1000);
    
                var riseTime = riseDate.toLocaleTimeString();
                var setTime = setDate.toLocaleTimeString();
                
                var iconUrl = 'http://openweathermap.org/img/w/' + res.list[1].weather[0].icon + '.png'
                console.log(res);
                sec1 +=
                    `            
                    <p class="row text-center">  
                        <h1 class="temprature display-4">${res.list[0].main.temp}</h1>
                            <a href="index.html">&#8451;</a> |
                            <a href="index.html">&#8457;</a>                        
                        </sup> 
                    </p>
                    <p class="row">
                        <img class="ml-5 pb-2" src="${iconUrl}" style="width: 120px;
                        height: auto;">
                    </p>                       
                    `
                $('.ct3sec1').append(sec1)
                sec2 +=
                    `
                        <p class="row display-4 text-center place pl-2">${res.city.name}, ${res.city.country}</p>
                        <div class="row">
                            <div class="col-5 border-right">
                                <p>
                                    
                                    <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                    <i class="fas fa-arrow-up"></i>  
                                    ${res.list[0].main.temp_max}&#8451;<br>
                                    <img src="assets/temperature.png" style="width:30px;height:auto"></img> 
                                    <i class="fas fa-arrow-down"></i>                            
                                    ${res.list[0].main.temp_min}&#8451;<br>
                                    <i class="fas fa-wind fa-lg"></i> ${res.list[0].wind.speed} mt/sec <br>
                                    <img src="assets/sunrise.png" style="width:30px;height:auto"></img>     ${riseTime}<br>
                                    <img src="assets/sunset.png" style="width:25px;height:auto"></img>     ${setTime}
                                </p>
                            </div>
                            <div class="col-3 border-right">
                                <table>
                                    <tr>
                                        <td><img src="assets/cloud.png" style="width:30px;height:auto"></img> </td>
                                        <td> ${res.list[0].clouds.all}% </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/humidity1.png" style="width:30px;height:auto"></img> </td>
                                        <td>  ${res.list[1].main.humidity}&#8451;  </td>
                                    </tr>                                  
                                </table> 
                            </div>
                            <div class="col-3">
                                <table>
                                    <tr>
                                        <td><img src="assets/9am.webp" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly"> ${res.list[0].main.temp}&#8451; </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/12pm.png" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[1].main.temp}&#8451;  </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/3pm.webp" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[2].main.temp}&#8451;  </td>
                                    </tr>
                                    <tr>
                                        <td><img src="assets/6pm.png" style="width:30px;height:auto"></img> </td>
                                        <td class="hourly">  ${res.list[3].main.temp}&#8451;  </td>
                                    </tr>                                    
                                </table>   
                            </div>                                                                 
                    `
                $('.ct3sec2').append(sec2)
            }
        })



        //below is amer's code..........................................

        myarrayCountry = ['london', 'California', 'Dubai', 'Australia']
        var country = ''

        $.each(myarrayCountry, function (index, item) {


            $.ajax({
                type: 'GET',
                DataType: 'json',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${item}&appid=a19b37efc582adcf64e80e83a67494fc&units=metric`,
                async: false,
                success: searchCallback
            });

            function searchCallback(data) {

                country +=
                    `
             <div class="carousel-item">
             <img src="atmosphere1.jpeg" class="d-block w-100" alt="${item}" width="1000" height="400">
             <div class="carousel-caption d-block">
               <h3>${item} Weather</h3>
               <p id="temp">Temp :${data.main.temp} deg <span id="temp_max" style="margin:30px">Max-Temp :${data.main.temp_max} deg</span></p>              
               <p id="temp-min">Min-Temp :${data.main.temp_min} deg <span  id="humidity" style="margin:30px">Humidity :${data.main.humidity} g.kg-1</span></p>
               <p id="pressure">Pressure :${data.main.pressure} N/m^2 <span  id="wind" style="margin:30px">Wind-Speed :${data.wind.speed} km/h</span></p>    
             </div>
             </div>
             `

            }
            $('.country').append(country)

        });
    })
    // ----------------------------------------------------------------------------------------------------------------
    myarrayindia = ['delhi', 'mumbai', 'bangalore', 'kolkata']
    var india = ''

    $.each(myarrayindia, function (index, item) {


        $.ajax({
            type: 'GET',
            DataType: 'json',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${item}&appid=a19b37efc582adcf64e80e83a67494fc&units=metric`,
            async: false,
            success: searchCallback
        });

        function searchCallback(data) {

            india +=
                `
         <div class="carousel-item">
         <img src="atmosphere2.jpeg" class="d-block w-100" alt="${item}" width="1100" height="400">
         <div class="carousel-caption d-block">
           <h3>${item} Weather</h3>
           <p id="temp">Temp :${data.main.temp} deg <span id="temp_max" style="margin:30px">Max-Temp :${data.main.temp_max} deg</span></p>              
           <p id="temp-min">Min-Temp :${data.main.temp_min} deg <span  id="humidity" style="margin:30px">Humidity :${data.main.humidity} g.kg-1</span></p>
           <p id="pressure">Pressure :${data.main.pressure} N/m^2 <span  id="wind" style="margin:30px">Wind-Speed :${data.wind.speed} km/h</span></p>  
         </div>
         </div>
         `

        }
     
        $('.india').append(india)

    })


//---------------------------------------------------------------------
myarray = ['Hyderabad', 'Nizamabad', 'Adilabad', 'Karimnagar']
var state = ''

$.each(myarray, function (index, item) {


    $.ajax({
        type: 'GET',
        DataType: 'json',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${item}&appid=a19b37efc582adcf64e80e83a67494fc&units=metric`,
        async: false,
        success: searchCallback
    });

    function searchCallback(data) {

      
        state +=
            `
     <div class="carousel-item">
     <img src="atmosphere3.jpeg" class="d-block w-100" alt="${item}" width="1100" height="400">
     <div class="carousel-caption d-block">
       <h3>${item} Weather</h3>
       <p id="temp">Temp :${data.main.temp} deg <span id="temp_max" style="margin:30px">Max-Temp :${data.main.temp_max} deg</span></p>              
               <p id="temp-min">Min-Temp :${data.main.temp_min} deg <span  id="humidity" style="margin:30px">Humidity :${data.main.humidity} g.kg-1</span></p>
               <p id="pressure">Pressure :${data.main.pressure} N/m^2 <span  id="wind" style="margin:30px">Wind-Speed :${data.wind.speed} km/h</span></p>         
     </div>
     </div>
     `

    }
    $('.state').append(state)

});
});
//------------------------------------------------------------------------------------------------------------

$('#search').click(function () {
    $('#carddiv').hide()
    $('#chetan1').hide()
    city = $('#city').val()
    var data='';
    $.ajax({
        type: 'GET',
        DataType: 'json',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a19b37efc582adcf64e80e83a67494fc&units=metric`,
        success: function (res) {
            data+='<div class="card dummy border border-info" style="width: 18rem ;margin: 20px;">'
            dummy_temp=parseFloat(res.main.temp)
          
            if(dummy_temp<22)
            {
                data+='<img src="sunrise.jpeg" class="card-img-top" alt="sunrise" ></img>'
            }
            else if(dummy_temp>22&&dummy_temp<=30)
            {
                data+='<img src="sunset.jpeg" class="card-img-top" alt="sunset"></img>'
            }
            else
            {
                data+='<img src="noon.jpeg" class="card-img-top" alt="noon"></img>'
            }
           
            data+=
            `
          
            <div class="card-body text-center">
                <h4 class="card-title text-info searched" id="searched-city" style='text-transform:uppercase'>${city}</h4>
                <p id="searchtemp" class="amer">Temp :${res.main.temp} deg</p>
                <p id="searchtemp_max">Max-Temp :${res.main.temp_max} deg</p>
                <p id="searchtemp_min">Min-Temp :${res.main.temp_min} deg</p>
                <p id="search_pressure">Pressure :${res.main.pressure} N/m^2</p>
                <p id="search_humidity">Humidity :${res.main.humidity} g.kg-1</p>
                <p id="search_wind">Wind-Speed :${res.wind.speed} km/h</p>  
                <br>            
            </div>
        </div>
            `        
           
            $.ajax({
                type: 'GET',
                DataType: 'json',
                url: `http://api.weatherapi.com/v1/forecast.json?key=782d4e563c8c48549c082006201610&q=${city}&days=3`,
                success: function (res) {

               console.log(res.forecast.forecastday[2].date)
               console.log(res.forecast.forecastday[2].day.maxtemp_c)
               console.log(res.forecast.forecastday[2].day.mintemp_c)
               google.charts.load('current', {'packages':['bar']});
               google.charts.setOnLoadCallback(drawChart);
               function drawChart() {
                   var data = google.visualization.arrayToDataTable([
                     ['Date', 'Temp_min', 'Temp_max'],
                     [res.forecast.forecastday[0].date, res.forecast.forecastday[0].day.mintemp_c,res.forecast.forecastday[0].day.maxtemp_c],
                     [res.forecast.forecastday[1].date, res.forecast.forecastday[1].day.mintemp_c,res.forecast.forecastday[1].day.maxtemp_c],
                     [res.forecast.forecastday[2].date, res.forecast.forecastday[2].day.mintemp_c,res.forecast.forecastday[2].day.maxtemp_c],
                   
                   ]);
               
                   var options = {
                     chart: {
                       title: 'Temperature Difference',
                       subtitle: 'daily-temp_min,temp_max,',
                     },
                     bars: 'vertical' // Required for Material Bar Charts.
                   };
               
                   var chart = new google.charts.Bar(document.getElementById('barchart_material'));
                   $('#barchart_material').empty()
                   chart.draw(data, google.charts.Bar.convertOptions(options));
                 }
             }


         })
        
         $('.current-location').empty()
         $('.current-temperature').empty()
         $('.found-city').empty()
         $('.found-city').append(data)

        }
      
    })
    
    $('.found-city').click(function () { 
        
        //this is for conversuation of degree to fahrenheit and vice versa
        var dummy = $('#searchtemp').text()
        if (dummy.includes('deg')) {
            var cel = parseFloat(dummy.substr(6, 8))
            var far = cel * 9 / 5 + 32;
            far = 'Temp :' + far + ' fahrenheit'
          
            $('#searchtemp').text(far)
        }
        else if (dummy.includes('fahrenheit')) {
            var far = parseFloat(dummy.substr(6, 8))
            var cel = (5 / 9) * (far - 32)
            cel = 'Temp :' + cel + ' deg'
           
            $('#searchtemp').text(cel)
        }
    })
})
//--------------------------------------------------------------------------------------------------------------

    $('.location').click(function () {   
        $('#carouselSection').toggle();
        $('#carddiv').hide();
        $('#chetan1').hide();
        var current_city=''
        var data = ""; 
        var atmdata=''
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function (location) {
                current_city=location.city
                data=
                `
                <div class="card border border-info" style="width: 18rem ;margin: 20px;">
                <div class="card-body text-center">
                    <h4 class="card-title text-info searched">Curent Location</h4>
                    <br>
                    <p id="found-city">City::${location.city}</p>
                    <p id="postal">Pin-Code::${location.postal}</p>
                    <p id="state">State::${location.state}</p>
                    <p id="country">Country::${location.country_name}</p>
                    <p id="latitude">Latitude::${location.latitude}</p>
                    <p id="longitude">Longitude::${location.longitude}</p> 
                    <br>
                    <br>                                  
                </div>
            </div>
            `           
            $.ajax({
                type: 'GET',
                DataType: 'json',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${current_city}&appid=a19b37efc582adcf64e80e83a67494fc&units=metric`,
                success: function (res) {
                   atmdata=
                    `
                    
                <div class="card border border-info" style="width: 18rem ;margin:20px">
                <div class="card-body text-center">
                <h4 class="card-title text-info searched">Weather @Current Location</h4>
                <h5 class="card-title text-info searched" id="searched-city">${current_city}</h5>
                <p id="currenttemp">Temp :${res.main.temp} deg</p>
                <p id="currenttemp_max">Max-Temp :${res.main.temp_max} deg</p>
                <p id="currenttemp_min">Min-Temp :${res.main.temp_min} deg</p>
                <p id="current_pressure">Pressure :${res.main.pressure} N/m^2</p>
                <p id="current_humidity">Humidity :${res.main.humidity} g.kg-1</p>
                <p id="current_wind">Wind-Speed :${res.wind.speed} km/h</p>
                </div>
                 </div>
                    `
                  

                                  
                 $.ajax({
                 type: 'GET',
                 DataType: 'json',
                 url: `http://api.weatherapi.com/v1/forecast.json?key=782d4e563c8c48549c082006201610&q=${current_city}&days=3`,
                 success: function (res) {

                console.log(res.forecast.forecastday[2].date)
                console.log(res.forecast.forecastday[2].day.maxtemp_c)
                console.log(res.forecast.forecastday[2].day.mintemp_c)
                google.charts.load('current', {'packages':['bar']});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {
                    var data = google.visualization.arrayToDataTable([
                      ['Date', 'Temp_min', 'Temp_max'],
                      [res.forecast.forecastday[0].date, res.forecast.forecastday[0].day.mintemp_c,res.forecast.forecastday[0].day.maxtemp_c],
                      [res.forecast.forecastday[1].date, res.forecast.forecastday[1].day.mintemp_c,res.forecast.forecastday[1].day.maxtemp_c],
                      [res.forecast.forecastday[2].date, res.forecast.forecastday[2].day.mintemp_c,res.forecast.forecastday[2].day.maxtemp_c],
                    
                    ]);
                
                    var options = {
                      chart: {
                        title: 'Temperature Difference',
                        subtitle: 'daily-temp_min,temp_max,',
                      },
                      bars: 'vertical' // Required for Material Bar Charts.
                    };
                
                    var chart = new google.charts.Bar(document.getElementById('barchart_material'));
                    $('#barchart_material').empty()
                    chart.draw(data, google.charts.Bar.convertOptions(options));
                  }
              }


          })
          $('.current-location').empty()
          $('.current-temperature').empty()
          $('.found-city').empty()
          $('.current-location').append(data)
          $('.current-temperature').append(atmdata)
  
                }

            })
          
            }
        })
    }) 
    
          
const apiid = 'cea03fcf5683dfd51a65351dc227a687';
const url = 'http://api.openweathermap.org/data/2.5/group?appid=' + apiid + '&id=1273294,524901,2643743,5128581,1275339,1277333,1279233,1273874&units=metric';
fetch(url).then(function (response) {
    return response.json();
}).then(function (json) {
    let climate = json;
    for (var i = 0; i < 4; i++) {
         $("#cardtitle" + i).html(climate['list'][i].name);
        $("#temp" + i).html(climate['list'][i].main.temp + "&#8451");
        $("#card-text" + i).html(climate['list'][i].weather[0].description);
        $("#wind" + i).after(climate['list'][i].wind.speed + "m/s");
        $("#humidity" + i).after(climate['list'][i].main.humidity + "% ");
    }
    console.log(climate['list'][0].main.temp, climate['list'][0].name, climate['list'][0].weather[0].description);
}).catch(function (err) {
    console.log('fetch error' + err.message);
});

   
 

    



