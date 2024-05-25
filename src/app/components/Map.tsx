'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const Map = () => {
  const [showMap, setShowMap] = useState<boolean>(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
        version: 'quartely'
      })

      const {Map} = await loader.importLibrary('maps')
      const {AdvancedMarkerElement} = await loader.importLibrary('marker')

      const locationInMap = {
        lat: 28.535517,
        lng: 77.391029
      }

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 15,
        mapId: 'hotel map'
      }

      const map = new Map(mapRef.current as HTMLDivElement, options)

      const marker = new AdvancedMarkerElement({
        map,
        position: locationInMap,
        title: 'Noida'
      })
    }

    if(showMap) initializeMap();
  }, [showMap])

  return (
    <>
      {
        showMap ?
        (<div className='map-container h-96 w-96'>
          <div ref={mapRef} className='rounded h-full w-full'></div>
        </div>) :
        <button onClick={() => setShowMap(true)} className='hover:underline font-medium text-base text-blue-400'>View Map</button>
      }
    </>
  )
}

export default Map