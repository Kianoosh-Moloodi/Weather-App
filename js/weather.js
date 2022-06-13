class Weather {
    constructor(city){
        this.city = city,
        this.apiKey = ''
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }else{
            throw Error(response.status);
        }
    }

    changeLocation(city){
        this.city = city
    }
}
