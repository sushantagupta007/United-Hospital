
import React, { useEffect,useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'; 

import './Map.css'
import L from 'leaflet';

import icon from '../../Image/icon1.svg'

const myIcon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [10, 20],
    popupAnchor: [2, -10]   
    
});

const Map = () => {
  const [data,setData] = useState([]);
  const [activePark, setActivePark] = useState(null);

  useEffect(()=>{
    fetch('/Data/data.json')
    .then(response=>response.json())
    .then (data=>{
      
      setData(data.features)})
  },[])
  
  console.log(data)

  const position = [  23.80470908921082, 90.41577285451402]
    return (
      <div className='w-75 mx-auto p-2' id="mapContainer"> 
      <MapContainer center={position} zoom={5.5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {data.map(item=>
        <Marker 
          position={
            [item.geometry.coordinates[1],
            item.geometry.coordinates[0]]
          }
          icon={myIcon}
          eventHandlers={{
            click: () => {
              setActivePark(item)
              console.log('marker clicked')
            },
          }}
          >
         {activePark && (
            <Popup
              position={[
                activePark.geometry.coordinates[1],
                activePark.geometry.coordinates[0]
              ]}
              onClose={() => {
                setActivePark(null);
              }}
            >
              <div>
                <p>{activePark.properties.NAME}</p>
                <p>{activePark.properties.BRANCH}</p>
              </div>
            </Popup>
          )}
            
          </Marker>
      )}        
      </MapContainer>
      </div>
    )
};

export default Map;