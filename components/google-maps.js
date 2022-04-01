import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  Circle,
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
import { placesData } from "../data/data";
// import { collection, getDocs, doc } from "@firebase/firestore";
// import db from "../firebase-config";
// const placesCollectionRef = collection(db, "places");
// const data = await getDocs(placesCollectionRef);
// placesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

/**
 * Calculate the distance between two points in m's
 * @args (point1, point2): {object} { lat: number, lng: number }
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
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const [center, setCenter] = useState({
    lat: 1.348,
    lng: 103.683,
  });
  const [boundRadius, setBoundRadius] = useState(3000);
  const [zoomLevel, setzoomLevel] = useState(13);

  const [curPlace, setCurPlace] = useState({});
  const onPlaceChanged = () => {
    try {
      let thisPlace = autocomplete.getPlace();
      const lat = thisPlace.geometry.location.lat();
      const lng = thisPlace.geometry.location.lng();
      setzoomLevel(14);
      setCenter({ lat, lng });
      setCurPlace(thisPlace);
    } catch (error) {}
  };

  const [places, setPlaces] = useState(null);
  useEffect(async () => {
    setPlaces(placesData);
    if (navigator.geolocation) {
      const location = navigator.geolocation.getCurrentPosition((location) => {
        return location;
      });
      setCurPlace({});
    }
  }, [places]);

  // Markers information on click
  const [infos, setInfos] = useState([]);

  const handleOpenUserMenu = (event) => {
    setanchorUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setanchorUser(null);
  };
  const [anchorUser, setanchorUser] = useState(null);

  // Info window for current location.
  const [infoCurrent, setinfoCurrent] = useState([]);

  // state variables for e-waste type filters.
  const defaultChecked = {};
  for (let type of ewasteTypes) {
    defaultChecked[type] = true;
  }
  const [typeChecked, setTypeChecked] = useState(defaultChecked);

  // const for google map config
  const libraries = ["places"];
  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyBYqHAL0_W6xy3_FaKoxDrnpBsWNkj0urc"
        libraries={libraries}
        preventGoogleFontsLoading={false}
      >
        {/* Type filter */}
        <Box sx={{ paddingLeft: "5vw", flexGrow: 0, display: "inline-flex" }}>
          <Tooltip title="E-waste filters">
            <Button
              sx={{ p: 0, fontSize: 20 }}
              onClick={handleOpenUserMenu}
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
              {ewasteTypes.map((ewasteType) => {
                return (
                  <FormControlLabel
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
                setBoundRadius(radius);
              }}
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
                    <h1 class="font-medium">{info.Address},</h1>
                    <h1 class="font-medium"> Singapore {info.PostalCode}</h1>
                    <br></br>
                    <h2 class="font-medium">
                      Collections bin, Type available:
                    </h2>
                    <ul>
                      {info.Type?.map((type) => {
                        return <li>{type}</li>;
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
                <InfoWindow position={position}>
                  <h1>Hello</h1>
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
