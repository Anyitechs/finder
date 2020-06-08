import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Search from './SearchInput';

const libraries = ["places"];
const mapContainerStyle = {
    width: "400px",
    height: "300px"
}
const center = {
    lat: 9.081999,
    lng: 8.675277
}


function SearchMap () {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    });

    const [markers, setMarkers] = useState([]);

    if (loadError) return <p>"Error loading maps"</p>
    if (!isLoaded) return <p>"Loading Maps"</p>

    return( 
    <React.Fragment>
    <div className="map">

        <Search />

        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            >
            </GoogleMap>
    </div>
    </React.Fragment>
    )
}


export default SearchMap;