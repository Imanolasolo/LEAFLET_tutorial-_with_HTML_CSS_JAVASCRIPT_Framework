## 3rd step, adding map to our HTML (Dependences and JavaScript files)

Let´s start from beginning:

**1.- Modify our HTML index.file adding Leaflet dependences in CSS and JavaScript**

```
<!DOCTYPE html>
<html lang="en">
<!--Define html dependencies-->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--Leaflet dependencies css-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>	
    <!--CSS dependencies-->
	<link rel="stylesheet" type="text/css" href="mapa.css">
	    
	<!--Title for web and Html-->
    <title>LEAFLET Tutorial with HTML CSS and JavaScript Framework</title>
    <h1>LEAFLET Tutorial with HTML CSS and JavaScript Framework</h1>
			
</head>
<body>
	<!--Map implementation-->
    <div id="map"></div>
		
    <!--JS map dependences-->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   		crossorigin=""></script>
	    
    <!--JS Dependences-->
    <script src="mapa.js"></script>
    
	</body>

</html>

```
We have change some lines from our starting codebase:

* We added a link to Leaflet CSS dependence, `Leaflet` is a JavaScript library used to render interactive maps to be served as web apps. See more at [LeafletJS](https://leafletjs.com/).

    * The instruction is 
    ````
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
    ```

With this instruction we open the Leaflet CSS dependence to be used in our project, we wrote it in HTML to make the project portable in any device where we run it.

* We implemented a map visualization in HTML body. With a `<div>` tag we implement a `map` called object.

    * Instruction: 
    ```
     <div id="map"></div>

    ```

* We implemented a `JS (JavaScript)` dependence for Leaflet library to get some interactions with the map.

    * Instruction:
    ```
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   		crossorigin=""></script>
    ```

2.- Modify our .css file

```
/*Map style*/
#map {
    height: 450px;
    width: 1300px;
}

/*Title style*/
h1{
    color:darkblue;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}
```

* We add a `#map` description to draw a "box" where our map will be showed. We can change the size of "box" changing the height and width values.

3.- Create the map and tilelayer in JavaScript (.js file)

```
// Create map with coordinates and zoom
let map = L.map('map').setView([4.639386,-74.082412],10)

// Create Tilelayer from openstreetmap.org
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: 'IT4PROS 2022 &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//-------------------------------------------------------
```

* First we create a map variable with L.map Leaflet instance whwre we assign a location (given from coordenates) and a zoom value (6 to 18).

* We create a tilelayer from (https://openstreetmap.org), we used it because is a free source to get map layers, you can use any layer developer from your choice. The only rule to get the layer from this server is that you need to attribute, we wrote there our own contribution too (IT4PROS)

We have create our first map! in next lessons we will see how to interact with it.