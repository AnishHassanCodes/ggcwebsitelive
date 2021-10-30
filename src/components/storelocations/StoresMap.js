import React from 'react'
import {StoresMapContainer,StoresMapHeading,StoresMapFrame } from './StoresMapElements'
import MapSection from '../MapsLocationsStores/MapLHR'
const locationLHR = {
    address: '69 T Block T Gulberg 2, Lahore, Punjab 54660, Pakistan',
    lat: 31.519556262185002,
    lng: 74.3546397981197,
  }

  const locationRWP = {
    address: '17 Basement Al-Shiekh Plaza,Chandni Chowk, Rawalpindi Punjab, 43000',
    lat: 33.56697603526449,
    lng: 73.11667869328302,
  }
 

  const locationKHI = {
    address: 'Mezzanine Floor,7E,9th,Zamzama Commercial Lane, DHA,Karachi, Sindh, 75600 Pakistan',
    lat: 24.830339642173403,
    lng: 67.0704488692513,
  }
function StoresMap() {
    
    return (
        <>
             <StoresMapContainer id="location">
                <StoresMapHeading>Lahore  (42-35778977-78)</StoresMapHeading>
                <MapSection location={locationLHR} zoomLevel={17} />
                <StoresMapHeading>Rawalpindi (51-492707)</StoresMapHeading>
                <MapSection location={locationRWP} zoomLevel={17} />
                <StoresMapHeading>Karachi  (21-35875487)</StoresMapHeading>
                <MapSection location={locationKHI} zoomLevel={17} />
             </StoresMapContainer> 
        </>
    )
}

export default StoresMap
