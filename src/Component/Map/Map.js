import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Map.css'



const Map = () => {
    const position = [51.505, -0.09]
    useEffect(()=>{
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3VzaGFudGEtZ3VwdGEiLCJhIjoiY2t4M2M4dmdxMHV3ZDJvcGh0Y2ttdXg3NSJ9.bLEusf6lzlf0bT5XBHUK4w';
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [90.37965796561942, 23.873521279347592], // starting position [lng, lat]
        zoom: 9 // starting zoom
        });
    },[])
   
  
    return (
        <Container className="mt-5">
            <div id="map">

            </div>
        </Container>
    )
};

export default Map;