
import React, { useState, useEffect } from 'react';
import { DeckGL } from '@deck.gl/react';

import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { Map } from 'react-map-gl';
import Papa from 'papaparse';

const MAPTILER_API_KEY = process.env.REACT_APP_MAPTILER_API_KEY;

const TrafficMap = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [tooltip, setTooltip] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    Papa.parse('/coimbatore_traffic_data.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => { 
        const data = result.data.map((row) => {
          const lat = parseFloat(row.latitude);
          const lng = parseFloat(row.longitude);
          const congestion = row.congestion;
          if (!isNaN(lat) && !isNaN(lng)) { 
            return { lat, lng, congestion };
           
          }
          return null;
        }).filter(item => item !== null);
        setTrafficData(data);
        setLoading(false);
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
        setLoading(false);
      }
    });
  }, []);

 
  const hexagonData = trafficData.map(point => ({
    position: [point.lng, point.lat],
    congestion: point.congestion,
  }));
  

  
  const getColor = (congestion) => {
    switch (congestion) {
      case 'high': return [216, 80, 80];
      case 'medium': return [254, 173, 84];
      case 'low': return [106, 180, 205];
      default: return [255, 255, 255];
    }
  };

  const layer = new HexagonLayer({
    id: 'hexagon-layer',
    data: hexagonData,
    getPosition: d => d.position,
    radius: 1000,
    extruded: true,
    getColor: d => getColor(d.congestion),
    elevationScale: 50,
    pickable: true,
   
    
    onHover: ({ x, y, object }) => {
      if (object) {
        const avgLat = object.position[1];
        const avgLng = object.position[0];
        const congestion = object.points.length; 
        setTooltip({
          x,
          y,
          avgLat: avgLat.toFixed(5),
          avgLng: avgLng.toFixed(5),
          congestion,
           
        });
      } else {
        setTooltip(null);
      }
    },
  });

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {loading ? (
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
        }}>
          Loading Traffic Data...
        </div>
        
      ) : 
      (
        <DeckGL
          initialViewState={{
            latitude: 11.0168,
            longitude: 76.9558,
            zoom: 12,
            pitch: 30,
            bearing: 0,
          }}
          controller={true}
          layers={[layer]}
        >
          <Map
            mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_API_KEY}`}
          />
          {tooltip && (
            <div
              style={{
                position: 'absolute',
                left: tooltip.x,
                top: tooltip.y,
                backgroundColor: 'black',
                color: 'white',
                padding: '8px',
                borderRadius: '4px',
                pointerEvents: 'none',
                zIndex: 1000,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                fontSize: '14px',
              }}
            >
              <div><strong>Latitude:</strong> {tooltip.avgLat}</div>
              <div><strong>Longitude:</strong> {tooltip.avgLng}</div>
              <div><strong>Congestion Level:</strong> {tooltip.congestion}</div>
            </div>
          )}
        </DeckGL>
      )}
    </div>
  );
};

export default TrafficMap;
