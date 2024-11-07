
## TRAFFIC CONGESTION VISUALIZATION
### DESCRIPTION
This project visualizes traffic congestion in "Coimbatore" using **React**, **Deck.gl**, and **MapTiler**. The goal is to provide an easy-to-understand map that shows traffic conditions in different parts of the city, helping users see where there is heavy traffic and where the roads are clear. The traffic data is displayed on a **hexagonal grid**, where each hexagon represents an area, and its color shows the congestion level.The traffic data is loaded from a **CSV file**, which includes information like the location (latitude and longitude) and congestion level. **PapaParse** is used to read and process this data. The map itself is rendered using **react-map-gl** and styled with **MapTiler** to display the city’s streets clearly.when users can hover over the hexagons to see details like the average latitude, longitude, and congestion level for that area. The map is interactive, so users can zoom in, zoom out, and pan across the city.This project helps users understand traffic conditions at a glance, making it easier to plan their routes in Coimbatore.

## FEATURES

- Hexagonal Grid
  
- Color-Coded Congestion

- Interactive Map to Users can zoom, pan, and hover over hexagons to view detailed congestion data .
  
- Loading State is displayed while traffic data is being fetched and processed.

## GETTING STARTED

### PREREQUISITES

- React js
- NPM
- Deck.gl
- react-map-gl(React wrapper for Mapbox)
- MapTiler
- PapaParse

### DATASET - coimbatore_traffic_data.csv
 This dataset contains the information about traffic congestion in Coimbatore.

## IMPLEMENTATION

step 1:Setup the project -> To import the packages of react,deckgl,hexagon layer,papa parse,maptiler.
      [npm install react react-dom deck.gl react-map-gl mapbox-gl papaparse @deck.gl/aggregation-layers]
      
step 2:Retrieves the API key for MapTiler from the environment variables[.env.local]file in the project root for this to work.

step 3:To declare the state in main component TrafficMap .states:(trafficData,tooltip,loading )

step 4:To use the useEffect hook to load and process data from a CSV file on component mount.

step 5:To Uses Papa.parse to load and parse a CSV file located at '/coimbatore_traffic_data.csv'

step 6:Convert each row into object and filtering out he invalid entities.

step 7:Prepare the data for rendering on the hexagonal grid map by transforming it into a format suitable for the HexagonLayer.

step 8:color coded to hexagons based on traffic congestion levels to visually distinguishing areas of varying congestion on the map.

step 9:To sets up the HexagonLayer to visualize traffic congestion in hexagonal grid cells with interactive hover effects to display congestion details.

step 10:Renders the map using the MapTiler API with the map style set to streets-v2

step 11:Renders the tooltip for hover over hexagons to see details about the traffic congestion in that area.

## OUTPUT 

<img width="945" alt="image" src="https://github.com/user-attachments/assets/11c31d66-a8fe-4d0b-a0d4-78f007f41abe">

<img width="937" alt="image" src="https://github.com/user-attachments/assets/2c91fdd9-7e8a-4580-b548-5917db82b2e1">








