import React, { useState } from "react";
import { Select, Input, Popover } from 'antd';
import { Card } from 'antd';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

function Search() {

  const [state, setState ]= useState({
    city: "",
    range: 2
})
  const handleChange = (e: any) => {
    const { name, value } = e.target;
   setState({...state, [name]: value});
  }
  const {ready, value, suggestions: {status, data},
   setValue, 
   clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 9.081999,
         lng: () => 8.675277, 
         equals: () => true, 
         toUrlValue: () => "", toJSON: () => ({lat: 9.081999, lng: 8.675277})},
      radius: state.range * 1000
    },
  });

  return (
    <>
        <div className="select">
        <p className="geo-text">Geolocation radius</p>
        <p> 1 - {state.range}km </p> 
        <input type="range" min="1" max="20" onChange={handleChange} value={state.range} name="range" />
      </div>
    <div>
    <Input.Search style={{ width: 400 }} placeholder="input search text" value={value} onChange={(e) => {
      setValue(e.target.value)
    }}
      disabled={!ready} />
    <div>
      {status === "OK" && data.map(({id, description}) =>
      <div key={id}>
        <Card title="Hospitals">
          <Card type="inner" title={id}>
            {description}
          </Card>
        </Card>
      </div>
      )}
    </div>
    </div>
    </>
  )
}

export default Search;