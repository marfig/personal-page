import { PureComponent } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const mapStyle = {
  width: "100%",
  height: "63.5vh",
};

const mapboxApiKey =
  "pk.eyJ1IjoibWFydmluZWxkZXIiLCJhIjoiY2tpdzNwdmVrMG9kNDJyc2I3a3dwNHdqMCJ9.-nvylNuNoFdOEZIObb_s-g";

export default class SimpleMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: -25,
        longitude: -62,
        zoom: 4.5,
      },
    };
  }
  //*** El marker no se está actualizando con el zoom */
  onSelected = (viewport, item) => {
    this.setState({
      viewport,
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        mapboxApiAccessToken={mapboxApiKey}
        mapStyle="mapbox://styles/mapbox/light-v10"
        {...viewport}
        {...mapStyle}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Marker latitude={-24.343751357406486} longitude={-57.48847854227376}>
          <div className="map-marker">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
        </Marker>
      </ReactMapGL>
    );
  }
}
