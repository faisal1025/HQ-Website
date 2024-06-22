'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import axios from 'axios'

const Map = ({slug, address}: {slug: string, address?: string}) => {
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

      try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(slug)}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
  
        const response = await axios.get(url);
        const { results } = response.data;
        console.log("co-ordinates: ", results);

        let locationInMap = {
          lat: 28.570102,
          lng: 77.339505
        }

        if (results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          locationInMap.lat = lat; locationInMap.lng = lng;
        } else {
            console.log('No results found for the given address.');
        }
  
        const options: google.maps.MapOptions = {
          center: locationInMap,
          zoom: 19,
          mapId: 'hotel map'
        }
  
        const map = new Map(mapRef.current as HTMLDivElement, options)
  
        const marker = new AdvancedMarkerElement({
          map,
          position: locationInMap,
          title: 'Holet'
        })
      } catch (error) {
        console.log(error);
      }
    }

    if(showMap) initializeMap();
  }, [showMap, slug])

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