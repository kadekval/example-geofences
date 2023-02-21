import React, { useState } from 'react'
import './App.css'
import 'leaflet/dist/leaflet.css'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css' 
import { MapContainer, TileLayer } from 'react-leaflet'
import Geofences from './components/Geofences'

function App() {
  const position = [-8.795180, 115.217318]
  const [map, setMap] = useState(null)

  console.log({ map })

  return (
    <div className='h-[100vh]'>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom
        whenReady={(event) => setMap(event.target)}
        className='h-full'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Geofences map={map} />
      </MapContainer>
    </div>
  )
}

export default App
