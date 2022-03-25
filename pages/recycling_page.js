import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  Circle,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Menu,
  Box,
  Tooltip,
  IconButton,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { deletePlace, getAllPlaces, getPlace } from "../lib/ewaste_api";

const bounds_arc_len = {
  3000: 0.027,
  5000: 0.045,
  7000: 0.063,
  10000: 0.09,
  15000: 0.135,
  20000: 0.18,
};
const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "700px",
  display: "block",
};

// initializeDatabase();

function GoogleMapComponent() {
  const [center, setCenter] = useState({
    lat: 1.348,
    lng: 103.683,
  });
  const [bounds, setbounds] = useState(1); // bounds whole singapore
  const [boundRadius, setBoundRadius] = useState(0);
  const [zoomLevel, setzoomLevel] = useState(12);
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const [searchMarker, setSearchMarker] = useState(null);
  const [curPlace, setCurPlace] = useState({});
  const [zoomIn, setZoomIn] = useState(0);
  const onPlaceChanged = () => {
    // let input = document.getElementById("search-input");
    let thisPlace = autocomplete.getPlace();
    const lat = thisPlace.geometry.location.lat();
    const lng = thisPlace.geometry.location.lng();
    setzoomLevel(13);
    setCenter({ lat, lng });
    setSearchMarker({ lat, lng });
    setCurPlace(thisPlace);
  };

  const [places, setPlaces] = useState(null);
  useEffect(() => {
    // getAllPlaces()
    //   .then((data) => {
    //     setPlaces(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [places]);

  const options = {
    strictBounds: true,
    bounds: {
      north: center.lat + bounds,
      south: center.lat - bounds,
      east: center.lng + bounds,
      west: center.lng - bounds,
    },
  };

  const handleOpenUserMenu = (event) => {
    setanchorUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setanchorUser(null);
  };
  const [anchorUser, setanchorUser] = useState(null);
  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyBYqHAL0_W6xy3_FaKoxDrnpBsWNkj0urc"
        libraries={libraries}
      >
        <Box sx={{ flexGrow: 0, display: "inline-flex" }}>
          <Tooltip title="E-waste settings">
            <IconButton
              sx={{ p: 0, fontSize: 24 }}
              onClick={handleOpenUserMenu}
            >
              Filters
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorUser)}
            onClose={handleCloseUserMenu}
          >
            <FormGroup sx={{ ml: "10px" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="ICT Equipments"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Batterries and Lamps"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Ink and toner cartridges"
              />
            </FormGroup>
          </Menu>
        </Box>
        <Box
          sx={{
            minWidth: 100,
            display: "inline-flex",
            paddingLeft: "10px",
            paddingTop: "20px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="search-radius-input">Within</InputLabel>
            <Select
              labelId="search-radius"
              id="search-radius"
              value={boundRadius}
              label="Radius"
              onChange={(event) => {
                const radius = event.target.value;
                if (radius) {
                  setBoundRadius(radius);
                  // setbounds(bounds_arc_len[radius]);
                } else {
                  setBoundRadius(0);
                  setbounds(1);
                }
                console.log(places);
              }}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3000}>3km</MenuItem>
              <MenuItem value={5000}>5km</MenuItem>
              <MenuItem value={7000}>7km</MenuItem>
              <MenuItem value={10000}>10km</MenuItem>
              <MenuItem value={15000}>15km</MenuItem>
              <MenuItem value={20000}>20km</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoomLevel}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
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
              }}
              icon="../public/assets/markers/green_markers.png"
            />

            <Circle
              center={searchMarker}
              radius={boundRadius}
              option={{
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
              }}
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
                  marginLeft: "-150px",
                }}
              />
            </Autocomplete>
          </>
        </GoogleMap>
      </LoadScript>
    </>
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
          <GoogleMapComponent />
        </Container>
      </Layout>
    </>
  );
}
