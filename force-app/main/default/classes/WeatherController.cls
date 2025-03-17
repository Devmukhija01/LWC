public class WeatherController {
    @AuraEnabled(cacheable=true)
    public static String getWeather(String cityName) {
        String apiKey = '0c4493338042cca6bff86721728dbffd';
        String baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        String endpoint = baseUrl + '?q=' + EncodingUtil.urlEncode(cityName, 'UTF-8') + '&appid=' + apiKey + '&units=metric';

        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        req.setHeader('Content-Type', 'application/json');

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            return res.getBody();
        } else {
            throw new AuraHandledException('Error fetching weather data: ' + res.getStatus());
        }
    }

    @AuraEnabled(cacheable=true)
    public static String getWeatherByCoordinates(String latitude, String longitude) {
        String apiKey = '0c4493338042cca6bff86721728dbffd';
        String baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        String endpoint = baseUrl + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey + '&units=metric';

        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        req.setHeader('Content-Type', 'application/json');

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            return res.getBody();
        } else {
            throw new AuraHandledException('Error fetching weather data: ' + res.getStatus());
        }
    }
    
}
