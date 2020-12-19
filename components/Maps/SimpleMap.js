import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function SimpleMap() {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoibWFydmluZWxkZXIiLCJhIjoiY2tpdzNwdmVrMG9kNDJyc2I3a3dwNHdqMCJ9.-nvylNuNoFdOEZIObb_s-g",
  });

  return (
    <>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "63.5vh",
          width: "100%",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[0, 0]} />
        </Layer>
      </Map>
    </>
  );
}
