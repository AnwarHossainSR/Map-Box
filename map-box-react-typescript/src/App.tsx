import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const App = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 37.78,
    longitude: -122.45,
    zoom: 14,
  });
  const accessToken = process.env.REACT_APP_STRING;
  console.log(process.env.REACT_APP_STRING && process.env.REACT_APP_STRING);

  return (
    <ReactMapGL
      mapboxApiAccessToken={accessToken}
      {...viewport}
      onViewportChange={(viewport: any) => setViewport(viewport)}
    />
  );
};

export default App;
