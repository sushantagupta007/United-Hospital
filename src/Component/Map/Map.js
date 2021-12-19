
import React, { useEffect,useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'; 

import './Map.css'
import L from 'leaflet';

import icon from '../../Image/icon1.svg'


const myIcon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
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
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
          >
          </Marker>
      )}        
      </MapContainer>
      </div>
     
    )
};

export default Map;