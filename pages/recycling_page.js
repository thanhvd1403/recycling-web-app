import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { memo, useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "700px",
  display: "block",
};

const center = {
  lat: 1.348,
  lng: 103.683,
};

function GoogleMapComponent() {
  const onLoad = () => {};
  const onPlaceChanged = () => {};
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const getPlaces = async () => {}
  });
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBYqHAL0_W6xy3_FaKoxDrnpBsWNkj0urc"
      libraries={["places"]}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="Customized your placeholder"
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
                left: "50%",
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
      <script src=""></script>
      <Layout preview={true}>
        <Head>
          <title>Recycling Hub</title>
        </Head>
        <h1 class="">Where to recycle your E-waste?</h1>
        <Container>
          <GoogleMapComponent className="flex items-center" />
        </Container>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {}
