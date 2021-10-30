import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationsPin'
import { Config } from '../../../config'



  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Store</h2>
      {console.log(Config.MY_API_TOKEN)}
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: Config.MY_API_TOKEN }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map