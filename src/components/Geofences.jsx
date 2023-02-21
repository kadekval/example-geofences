/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'

// LEAFLET
import L from 'leaflet'
import '@geoman-io/leaflet-geoman-free'

const Geofences = (props) => {
  const { map } = props
  const geoJsonGeofenceListRef = useRef()

  const listLatLng = [[-8.795180, 115.217318], [-8.789624, 115.212297]]

  const addGeofencesToMap = () => {
    const geoJsonData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            radius: 150,
            name: 'Zona bahaya'
          },
          geometry: {
            type: 'Point',
            coordinates: [115.217318, -8.795180, 0], // lng, lat
          },
        },
        {
          type: 'Feature',
          properties: {
            radius: 60,
            name: 'Zona tol'
          },
          geometry: {
            type: 'Point',
            coordinates: [115.212297, -8.789624, 0], // lng, lat
          },
        }
      ],
    }
    
    geoJsonGeofenceListRef.current = L.geoJson(geoJsonData, {
      pointToLayer: (feature, latlng) => {
        if (feature.properties.radius) return new L.Circle(latlng, feature.properties.radius)
        else return new L.Marker(latlng)
      },
      style: () => {
        return {
          fillColor: '#F92B2B',
          color: '#F92B2B',
          fillOpacity: 0.2,
          opacity: 0.2,
        }
      },
    })
      
    geoJsonGeofenceListRef.current.addTo(map)

    listLatLng.map((item) => L.marker(item, {
      icon: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2395/2395362.png',
        iconSize: [20, 20]
      })
    }).addTo(map))
  }

  useEffect(() => {
    map && addGeofencesToMap()
  }, [map])

  return null
}

export default Geofences