import { useEffect, useState } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";

interface ViewPort {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
}

const App = () => {
  const [viewport, setViewport] = useState<ViewPort>({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 23.795396,
    longitude: 90.426012,
    zoom: 7,
    bearing: 0,
    pitch: 0,
  });
  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };

  const [count, setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(`Latitude is :`, position.coords.latitude);
          //console.log("Longitude is :", position.coords.longitude);
          setcount(position.coords.latitude);
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [count]);

  const accessToken: string | undefined = process.env.REACT_APP_AccessToken;
  return (
    <>
      {count}
      <ReactMapGL
        mapboxApiAccessToken={accessToken}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        {...viewport}
        onViewportChange={(viewport: ViewPort) => setViewport(viewport)}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
        <Marker
          latitude={23.7937}
          longitude={90.4066}
          offsetTop={-viewport.zoom * 3}
        >
          <img
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png"
            alt="address"
            width={viewport.zoom * 3}
            height={viewport.zoom * 3}
          />
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default App;
