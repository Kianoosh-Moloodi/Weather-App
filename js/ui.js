class UI{
    constructor(){
        this.location = document.getElementById("w-location");
        this.feels_like_temp = document.getElementById("feels_like");
        this.flag = document.getElementById("flag");
        this.country = document.getElementById("w-country");
        this.main = document.getElementById("w-main");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("w-temp");
        this.visibility = document.getElementById("w-visibility");
        this.temp_min = document.getElementById("w-temp_min");
        this.temp_max = document.getElementById("w-temp_max");
        this.pressure = document.getElementById("w-pressure");
        this.humidity = document.getElementById("w-humidity");
        this.wind_speed = document.getElementById("w-wind_speed");
        this.wind_deg = document.getElementById("w-wind_deg");
        this.lon = document.getElementById("w-lon");
        this.lat = document.getElementById("w-lat");
    }
    
    paint(weather){
        this.location.textContent = weather.name;
        const temp_c_fl = parseFloat(weather.main.feels_like - 273).toFixed(0);
        this.feels_like_temp.textContent = temp_c_fl;
        const temp_c_visible = parseFloat(weather.visibility / 1000).toFixed(1);
        this.visibility.textContent = temp_c_visible;
        this.country.textContent = weather.sys.country;
        this.main.textContent = weather.weather[0].main;
        this.icon.setAttribute('src' , `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.flag.setAttribute('src' , `https://openweathermap.org/images/flags/${weather.sys.country.toLowerCase()}.png`);
        const temp_c = parseFloat(weather.main.temp - 273).toFixed(1);
        this.temp.textContent = temp_c;
        const temp_c_min = parseFloat(weather.main.temp_min - 273).toFixed(1);
        this.temp_min.textContent = temp_c_min;
        const temp_c_max = parseFloat(weather.main.temp_max - 273).toFixed(1);
        this.temp_max.textContent = temp_c_max;
        this.pressure.textContent = weather.main.pressure;
        this.humidity.textContent = weather.main.humidity;
        this.wind_speed.textContent = weather.wind.speed;
        this.wind_deg.textContent = weather.wind.deg;
        this.lon.textContent = weather.coord.lon;
        this.lat.textContent = weather.coord.lat;
        
    }
}

