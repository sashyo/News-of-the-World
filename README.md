# Cloud-Computing-Mashup - News Of the World
 News of the World is a ReactJS application utilizing the NodeJS backend. This application currently
 allows people to access the current top headline of most countries. It gives users a visual and
 interactive medium to view and research what is happening around the world in one location on the
 web. By clicking on a certain part of the map, the application will provide you with articles and
 images on that current news. These articles are laid out to provide users with a user-friendly view.
 Giving users a Title, description, images, and some content to help persuade users to read further at
 the original source, which is easily accessible from the application.
 
### Services used
##### Google Maps API
Provides customizable maps to be used and displayed on web pages. Interactions with this API
are also customizable to allow the return of certain data. This API can be used with geocoding
to return more filtered\specific data that is needed.
Endpoint:https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&cal
lback=initMap">
Docs: https://developers.google.com/maps/documentation/javascript/overview
##### Google Geocoding API
This API is the process of converting addresses into geographic coordinates. This can be utilized
with Google Maps API to customize interactions. Reverse geocoding is a feature part of this API
that allows for entering the geographic coordinates to receive more specific data such as
addresses, street, country, neighbourhood and postal code.
Endpoint:
https://maps.googleapis.com/maps/api/geocode/outputFormat?paramete
rs
Docs: https://developers.google.com/maps/documentation/geocoding/overview
##### News API
HTTP REST API for searching and retrieving articles from the web. Allows for retrieval of data
with certain filters or parameters such as keyword or phrase, data , source and language and
many more.
Endpoint:https://newsapi.org/v2/


##### User guide
News API will present you with a map on load. You can click on an area on the map to view current
news of that area. Most countries are supported but not all, however, you will receive a message
informing if it’s supported or not.
There is a slight delay with the new articles changing and showing up. So please wait a couple of
seconds before moving forward.


![image](https://user-images.githubusercontent.com/25425071/152885500-72af84bb-f8dd-40a1-ad86-71536e848432.png)

![image](https://user-images.githubusercontent.com/25425071/152885451-86094ba1-b685-45c2-94d6-49c0a2815fb4.png)






