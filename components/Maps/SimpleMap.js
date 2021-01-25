import { PureComponent } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const mapStyle = {
  width: "100%",
  height: "100%",
};

const mapboxApiKey =
  "pk.eyJ1IjoibWFydmluZWxkZXIiLCJhIjoiY2tpdzNwdmVrMG9kNDJyc2I3a3dwNHdqMCJ9.-nvylNuNoFdOEZIObb_s-g";

export default class SimpleMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: -24.343751357406486,
        longitude: -57.48847854227376,
        zoom: 6,
      },
      marker: {
        latitude: -25.343739227444928,
        longitude: -57.48844823989433,
      },
    };
  }

  render() {
    const { viewport, marker } = this.state;

    return (
      <ReactMapGL
        mapboxApiAccessToken={mapboxApiKey}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        {...viewport}
        {...mapStyle}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Marker {...marker}>
          <div className="map-marker">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
        </Marker>
      </ReactMapGL>
    );
  }
}
