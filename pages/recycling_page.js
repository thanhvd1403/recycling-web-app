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
  useJsApiLoader,
  useGoogleMap,
} from "@react-google-maps/api";
import React, { memo } from "react";

const options = {
  zoomControlOptions: {
    // position: google.maps.ControlPosition.RIGHT_CENTER, // 'right-center' ,
    // ...otherOptions
  },
};

export const GoogleMapComponent = function MyComponent(props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDLTi4vTo5PTH9A772uxP5ibuS2Dopgox0", // ,
    // ...otherOptions
  });

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    const onLoad = function onLoad(mapInstance) {
      // do something with map Instance
    };
    return (
      <>
        <GoogleMap options={options} onLoad={onLoad}>
          {
            // ...Your map components
          }
        </GoogleMap>
        Hello
      </>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Loading...</div>;
};

export default function RecyclePage() {
  return (
    <>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLTi4vTo5PTH9A772uxP5ibuS2Dopgox0&libraries=places"></script>
      <Layout preview={true}>
        <Head>
          <title>Recycling Hub</title>
        </Head>

        <mapComponent />
        <Container>
          <GoogleMapComponent />
        </Container>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {}
