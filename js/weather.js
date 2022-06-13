class Weather {
    constructor(city){
        this.city = city,
        this.apiKey = 'a4d9a4617a2bad8ad2e2eb6a94a0aeb2'
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
