import { LightningElement, track } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherController.getWeather';
import getWeatherByCoordinates from '@salesforce/apex/WeatherController.getWeatherByCoordinates';
import images from '@salesforce/resourceUrl/images';

export default class WeatherComponent extends LightningElement {
    @track cityName = '';
    @track weatherData;
    @track currentWeatherData;
    @track openGetWeather = false;
    @track openCurrentGetWeather = false;
    @track myimg = `${images}/images/OIP.jpg`;
    @track myimg2= `${images}/images/rainy.jpg`;

    handleInputChange(event) {
        this.cityName = event.target.value;
    }

    fetchWeather() {
        this.openGetWeather=true;
        this.openCurrentGetWeather=false;
        if (this.cityName) {
            getWeatherData({ cityName: this.cityName })
                .then(result => {
                    this.weatherData = JSON.parse(result);
                    this.openGetWeather = true;
                })
                .catch(error => {
                    console.error('Error fetching weather data', error);
                });
        }
    }

    fetchWeatherByLocation() {
        this.openGetWeather=false;
        this.openCurrentGetWeather=true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                
                getWeatherByCoordinates({ latitude: latitude.toString(), longitude: longitude.toString() })
                    .then(result => {
                        this.currentWeatherData = JSON.parse(result);
                        this.openCurrentGetWeather = true;
                    })
                    .catch(error => {
                        console.error('Error fetching weather by location', error);
                    });
            }, error => {
                console.error('Error fetching location:', error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    
}
