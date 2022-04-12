import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Menu,
  Box,
  Tooltip,
  Button,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { placesData } from "../data/data";
import Swal from "sweetalert2";
// import { collection, getDocs, doc } from "@firebase/firestore";
// import db from "../firebase-config";
// const placesCollectionRef = collection(db, "places");
// const data = await getDocs(placesCollectionRef);
// placesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

// import API_KEY from "../googlemap-config";
const API_KEY = "AIzaSyCtXKwCc7odv0YcpZHzRvhU-85olozLMUc";
/**
 * Calculate the distance between two points in m's
 * @param {point_object} (point1, point2) { lat: number, lng: number }
 * @returns {number} distance in meters.
 */
function haversine_distance(point1, point2) {
  const R = 6371071; // Radius of the Earth in meters
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

const ewasteTypes = [
  "ICT equipment",
  "Batteries",
  "Lamps",
  "Ink and toner cartridges",
];

export default function GoogleMapComponent({ containerStyle }) {
  // GoogleMap Autocomplete search engine.
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  // Map localization state parameters.
  const [center, setCenter] = useState({
    lat: 1.348,
    lng: 103.683,
  });
  const [boundRadius, setBoundRadius] = useState(3000);
  const [zoomLevel, setzoomLevel] = useState(13);

  // Event handler for the autocomplete search box.
  const [curPlace, setCurPlace] = useState({});
  const onPlaceChanged = () => {
    try {
      let thisPlace = autocomplete.getPlace();
      const lat = thisPlace.geometry.location.lat();
      const lng = thisPlace.geometry.location.lng();
      setzoomLevel(14);
      setCenter({ lat, lng });
      setCurPlace(thisPlace);
      const searchInput = document.querySelector("#search-input");
      searchInput.value = "";
    } catch (error) {}
  };

  // Recycling points from dataset.
  const [places, setPlaces] = useState(null);
  useEffect(() => {
    setPlaces(placesData);
  }, [places]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(
          (location) => {
            const lat = location.coords.latitude;
            const lng = location.coords.longitude;
            setCenter({ lat, lng });
            return location;
          },
          (error) => {
            Swal.fire({
              title: "Something went wrong :(",
              text: "Please allow location access to use this feature",
              icon: "warning",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Okay!",
              background: "#ECEFDA",
              backdrop: `rgba(153, 241, 118, 0.4)`,
            });
          }
        );
      } catch (error) {}
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Location is not supported in your browser",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay!",
        background: "#ECEFDA",
        backdrop: `rgba(153, 241, 118, 0.4)`,
      });
    }
  };

  // Keep track information about E-waste recycling point for markers display.
  const [infos, setInfos] = useState([]);

  // Keep track of marker info for current location.
  const [infoCurrent, setinfoCurrent] = useState([]);

  const handleOpenFilterMenu = (event) => {
    setanchorFilter(event.currentTarget);
  };
  const handleCloseFilterMenu = () => {
    setanchorFilter(null);
  };
  const [anchorFilter, setanchorFilter] = useState(null);

  // state variables for e-waste type filters.
  const defaultChecked = {};
  for (let type of ewasteTypes) {
    defaultChecked[type] = true;
  }
  const [typeChecked, setTypeChecked] = useState(defaultChecked);

  // library to load for google map api.
  const libraries = ["places"];
  return (
    <>
      <LoadScript
        googleMapsApiKey={API_KEY}
        libraries={libraries}
        preventGoogleFontsLoading={false}
      >
        {/* Type filter */}
        <Box
          sx={{
            paddingLeft: { md: "10vw", xs: "3vw" },
            flexGrow: 0,
            display: "inline-flex",
          }}
        >
          <Tooltip title="E-waste filters">
            <Button
              sx={{
                fontSize: { md: 20, xs: 10 },
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              onClick={handleOpenFilterMenu}
              color="inherit"
              variant="outlined"
              size="large"
            >
              Type
              <ArrowDropDownCircleRoundedIcon />
            </Button>
          </Tooltip>

          <Menu
            id="menu-appbar"
            anchorEl={anchorFilter}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorFilter)}
            onClose={handleCloseFilterMenu}
          >
            <FormGroup sx={{ ml: "10px" }}>
              {ewasteTypes.map((ewasteType) => {
                return (
                  <FormControlLabel
                    key={ewasteType}
                    control={
                      <Checkbox
                        defaultChecked
                        onChange={(event) => {
                          setTypeChecked({
                            ...typeChecked,
                            [ewasteType]: event.target.checked,
                          });
                          console.log("Type checked:", typeChecked);
                        }}
                      />
                    }
                    label={ewasteType}
                  />
                );
              })}
            </FormGroup>
          </Menu>
        </Box>
        {/* Distance filter */}
        <Box
          sx={{
            display: "inline-flex",
            paddingLeft: "10px",
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
                setBoundRadius(radius);
              }}
              sx={{ height: { md: 54, xs: 45 }, fontSize: { md: 20, xs: 15 } }}
            >
              <MenuItem value={70000}>All</MenuItem>
              <MenuItem value={500}>500m</MenuItem>
              <MenuItem value={1000}>1km</MenuItem>
              <MenuItem value={2000}>2km</MenuItem>
              <MenuItem value={3000}>3km</MenuItem>
              <MenuItem value={5000}>5km</MenuItem>
              <MenuItem value={7000}>7km</MenuItem>
              <MenuItem value={10000}>10km</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ paddingLeft: "10px", flexGrow: 0, display: "inline-flex" }}>
          <Button
            sx={{
              fontSize: { md: 16, xs: 10 },
              paddingTop: { md: "13px", xs: "10px" },
              paddingBottom: { md: "12px", xs: "10px" },
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            onClick={getCurrentLocation}
            color="inherit"
            variant="outlined"
            size="large"
          >
            Location
            <LocationOnIcon />
          </Button>
        </Box>
        <GoogleMap
          id="google-map"
          mapContainerStyle={containerStyle}
          options={{ mapTypeControl: false }}
          center={center}
          zoom={zoomLevel}
          onZoomChanged={() => {}}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            {places?.map((place) => {
              let matchedFilter = false;
              for (let type of ewasteTypes) {
                if (typeChecked[type] && place.Type.includes(type)) {
                  matchedFilter = true;
                  break;
                }
              }
              if (
                haversine_distance(center, place.location) <= boundRadius &&
                matchedFilter
              ) {
                const location = place.location;
                return (
                  <Marker
                    key={place.id}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={`${place.Address}, Singapore ${place.PostalCode}`}
                    onClick={() => {
                      setInfos((prevInfos) => [...prevInfos, place]);
                    }}
                    icon={"/assets/markers/greenMarkers.png"}
                  />
                );
              }
            })}

            {infos?.map((info) => {
              const location = {
                lat: info.location.lat + 0.0003 * 10 ** (14 - zoomLevel),
                lng: info.location.lng,
              };
              return (
                <InfoWindow
                  position={location}
                  key={`${info.id} info window`}
                  onClick={() => {}}
                >
                  <>
                    <h1 className="font-medium">{info.Address},</h1>
                    <h1 className="font-medium">
                      {" "}
                      Singapore {info.PostalCode}
                    </h1>
                    <br></br>
                    <h2 className="font-medium">
                      Collections bin, Type available:
                    </h2>
                    <ul>
                      {info.Type?.map((type) => {
                        return <li key={type}>{type}</li>;
                      })}
                    </ul>
                  </>
                </InfoWindow>
              );
            })}
            <Marker
              onLoad={() => {}}
              position={center}
              title={`${curPlace.name} \n${curPlace.formatted_address}`}
              editable={true}
              onDblClick={() => {}}
              onRightClick={() => {}}
              onClick={() => {
                setinfoCurrent((prevState) => {
                  return [
                    ...prevState,
                    { lat: center.lat + 0.0025, lng: center.lng },
                  ];
                });
              }}
              id="search-marker"
            />
            {infoCurrent?.map((position) => {
              return (
                <InfoWindow position={position} key={position}>
                  <h1>You are here!</h1>
                </InfoWindow>
              );
            })}
            <Autocomplete
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
              options={{
                strictBounds: true,
              }} // further restriction by radius bounds.
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
                  width: `250px`,
                  height: `40px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `18px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "3%",
                }}
              />
            </Autocomplete>
          </>
        </GoogleMap>
      </LoadScript>
    </>
  );
}
