import React, { useState } from 'react'
import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

function App() {
  const position = [51.505, -0.09]
  const [map, setMap] = useState(null)

  console.log({ map })

  return (
    <div className='h-[100vh]'>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        whenReady={(event) => setMap(event.target)}
        className='h-full'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default App
