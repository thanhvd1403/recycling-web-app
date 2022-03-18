import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import db from "../firebase-config";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  KmlLayer,
} from "@react-google-maps/api";
import React, { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { collection, getDocs } from "@firebase/firestore";

const bounds_radius = {
  "3km": 0.027,
  "5km": 0.045,
  "7km": 0.063,
  "10km": 0.09,
  "15km": 0.135,
  "20km": 0.18,
};
const libraries = ["places"];

function fireBase() {
  const [places, setPlaces] = useState([]);
  const placesRef = collection(db, "places");
  const getPlaces = async () => {
    const data = await getDocs(placesRef);
    setPlaces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return getPlaces();
}

const containerStyle = {
  width: "100%",
  height: "700px",
  display: "block",
};

function GoogleMapComponent() {
  const [center, setCenter] = useState({
    lat: 1.348,
    lng: 103.683,
  });
  const [bounds, setbounds] = useState(1); // bounds whole singapore
  const [zoomLevel, setzoomLevel] = useState(13);
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const [searchMarker, setSearchMarker] = useState(null);
  const [curPlace, setCurPlace] = useState({});
  const [zoomIn, setZoomIn] = useState(0);
  const onPlaceChanged = () => {
    let input = document.getElementById("search-input");
    let thisPlace = autocomplete.getPlace();
    const lat = thisPlace.geometry.location.lat();
    const lng = thisPlace.geometry.location.lng();
    setzoomLevel(15);
    setCenter({ lat, lng });
    setSearchMarker({ lat, lng });
    setCurPlace(thisPlace);
  };

  const options = {
    strictBounds: true,
    bounds: {
      north: center.lat + bounds,
      south: center.lat - bounds,
      east: center.lng + bounds,
      west: center.lng - bounds,
    },
  };

  useEffect(() => {
    // fireBase();
  });

  const [markers, setMarkers] = useState([]);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBYqHAL0_W6xy3_FaKoxDrnpBsWNkj0urc"
      libraries={libraries}
    >
      <button
        onClick={() => {
          setCenter({ ...center, lat: center.lat + 0.01 });
        }}
      >
        Hello
      </button>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoomLevel}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <KmlLayer url="../data/e-waste-recycling-kml.kml" />
          <Marker
            onLoad={() => {}}
            position={searchMarker}
            title={`${curPlace.name} \n${curPlace.formatted_address}`}
            onClick={() => {
              setzoomLevel(zoomLevel + 1);
              setZoomIn(zoomIn + 1);
            }}
            onRightClick={() => {
              setzoomLevel(zoomLevel - zoomIn);
              setZoomIn(0);
              console.log("Hello");
            }}
            visible={true}
            // label="Hello"
          />
          <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
            options={options} // further restriction by radius bounds.
            restrictions={{ country: ["sg"] }} // restrict to singapore
            id="autocomplete"
            types={["geocode"]}
          >
            <input
              type="text"
              id="search-input"
              placeholder="Search for E-waste"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "25%",
                marginLeft: "-120px",
              }}
            />
          </Autocomplete>
        </>
      </GoogleMap>
    </LoadScript>
  );
}
export default function RecyclePage() {
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>Recycling Hub</title>
        </Head>

        <Container>
          {/* <h1 class="">Where to recycle your E-waste?</h1> */}
          <GoogleMapComponent className="flex items-center" />
        </Container>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {}
