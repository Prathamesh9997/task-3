var request = new XMLHttpRequest();
const apiKey = "890592b234f66fd368995b006601db88";
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    for(var i in data){
        const name = data[i].name;
        const latAndLng = data[i].latlng;
        const lat = latAndLng[0];
        const lng = latAndLng[1];
        const unit = "metric";

        var requestForTemp = new XMLHttpRequest();
        requestForTemp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid='+apiKey+"&units="+unit, true);
        requestForTemp.send();
        requestForTemp.onload = function (){
            var tempData = JSON.parse(this.response);
            console.log("City Name: " +name+ " Temperature: "+tempData.main.temp+'\u00B0');
        }
    }
}

//Getting error for city 'United States Minor Outlying Islands' since its 'latlng' array is empty on restcountries site. 


