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

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        "pk.eyJ1IjoiYW53YXJzciIsImEiOiJja3dsbXp0MzUyM3J1MnBxaTFqMzdvemx6In0.6DFQZ2-AUWxf2I2OmoUa1A"
      }
      {...viewport}
      onViewportChange={(viewport: any) => setViewport(viewport)}
    />
  );
};

export default App;
