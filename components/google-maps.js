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
// import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
// import db from "../firebase-config";
// import { deleteAllPlaces, initializeDatabase } from "../lib/initializeDatabase";
import { placesData } from "../data/data";

const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "700px",
  display: "block",
};

/**
 * @args (point1, point2): {object} { lat: number, lng: number }
 * @returns {number} distance in meters.
 */
function haversine_distance(point1, point2) {
  const R = 6371071; // Radius of the Earth in miles
  let rlat1 = point1.lat * (Math.PI / 180); // Convert degrees to radians
  let rlat2 = point2.lat * (Math.PI / 180); // Convert degrees to radians
  let difflat = rlat2 - rlat1; // Radian difference (latitudes)
  let difflon = (point2.lng - point1.lng) * (Math.PI / 180); // Radian difference (longitudes)
  var d =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
          Math.cos(rlat1) *
            Math.cos(rlat2) *
            Math.sin(difflon / 2) *
            Math.sin(difflon / 2)
      )
    );
  return d;
}

export default function GoogleMapComponent() {
  const [center, setCenter] = useState({
    lat: 1.348,
    lng: 103.683,
  });
  const [boundRadius, setBoundRadius] = useState(0);
  const [zoomLevel, setzoomLevel] = useState(12);
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const [searchMarker, setSearchMarker] = useState(null);
  const [curPlace, setCurPlace] = useState({});
  const onPlaceChanged = () => {
    // let input = document.getElementById("search-input");
    let thisPlace = autocomplete.getPlace();

    const lat = thisPlace.geometry.location.lat();
    const lng = thisPlace.geometry.location.lng();
    setzoomLevel(13);
    setCenter({ lat, lng });
    setSearchMarker({ lat, lng });
    setCurPlace(thisPlace);
    console.log(thisPlace);
  };

  const [places, setPlaces] = useState(null);
  useEffect(() => {
    // const getPlaces = async () => {
    //   const placesCollectionRef = collection(db, "places");
    //   const data = await getDocs(placesCollectionRef);
    //   setPlaces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log(places);
    // };
    // getPlaces();
    setPlaces(placesData);
    if (navigator.geolocation) {
      const location = navigator.geolocation.getCurrentPosition((location) => {
        return location;
      });
      console.log(location);
      setCurPlace({});
    }
  }, [places]);

  const options = {
    strictBounds: true,
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
                } else {
                  setBoundRadius(0);
                }
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
            {places?.map((place) => {
              const radius = boundRadius > 0 ? boundRadius : 50000;
              if (haversine_distance(center, place.location) <= radius) {
                const location = place.location;
                return (
                  <Marker
                    key={place.id}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={`${place.Address}, Singapore ${place.PostalCode}`}
                    onClick={() => {}}
                    icon={"/assets/markers/greenMarkers.png"}
                  />
                );
              }
            })}
            <Marker
              onLoad={() => {}}
              position={searchMarker}
              title={`${curPlace.name} \n${curPlace.formatted_address}`}
              editable={true}
              onDblClick={() => {}}
              onRightClick={() => {}}
            />
            <Circle
              center={searchMarker}
              radius={boundRadius}
              option={{
                strokeColor: "#F9F9F9",
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: "#F9F9F9",
                fillOpacity: 0.1,
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
