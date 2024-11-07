                                             Traffic congestion visualization 

step 1:Setup the project -> To import the packages of react,deckgl,hexagon layer,papa parse,maptiler.
      command:[npm install react react-dom deck.gl react-map-gl mapbox-gl papaparse @deck.gl/aggregation-layers]
      
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


