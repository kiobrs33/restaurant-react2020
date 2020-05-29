import React from "react";
import {
   GoogleMap,
   withScriptjs,
   withGoogleMap,
   Marker,
   InfoWindow,
   Polyline,
} from "react-google-maps";

import iconTienda from "../../../assets/img/tienda.png";
import iconClient from "../../../assets/img/disfrutar.png";

import { drawRoute } from "../../../utilites/map";

class Map extends React.Component {
   state = {
      selectPosition: null,
      coordenadasRuta: [],
      first_position: {},
      last_position: {},
   };

   componentDidMount = async () => {
      const { mainPosition, clientPosition } = this.props;
      const res = await fetch(
         `http://router.project-osrm.org/route/v1/driving/${mainPosition.lng},${mainPosition.lat};${clientPosition.lng},${clientPosition.lat}?geometries=geojson`,
         { method: "GET" }
      );
      const data = await res.json();
      const array = drawRoute(data.routes[0].geometry.coordinates);
      const first_position = array[0];
      const last_position = array[array.length - 1];
      this.setState({ coordenadasRuta: array, first_position, last_position });
   };

   handleSelectPoint = (dataPosition) => {
      this.setState({ selectPosition: dataPosition });
   };

   handleSelectPointNull = () => {
      this.setState({ selectPosition: null });
   };
   render() {
      if (Object.keys(this.state.last_position).length === 0) {
         return <div>Cargando........................</div>;
      }
      const { handleSelectPoint, handleSelectPointNull } = this;
      const { selectPosition, first_position, last_position } = this.state;

      return (
         <div>
            <GoogleMap
               defaultZoom={16}
               defaultCenter={{
                  lat: first_position.lat,
                  lng: first_position.lng,
               }}
            >
               {
                  <div>
                     <Marker
                        position={{
                           lat: first_position.lat,
                           lng: first_position.lng,
                        }}
                        onClick={() => {
                           handleSelectPoint(first_position);
                        }}
                        icon={{
                           url: iconTienda,
                           scaledSize: new window.google.maps.Size(40, 40),
                        }}
                     />
                     <Marker
                        position={{
                           lat: this.state.last_position.lat,
                           lng: this.state.last_position.lng,
                        }}
                        onClick={() => {
                           handleSelectPoint(last_position);
                        }}
                        icon={{
                           url: iconClient,
                           scaledSize: new window.google.maps.Size(40, 40),
                        }}
                     />

                     <Polyline
                        path={this.state.coordenadasRuta}
                        // path={[
                        //    // {
                        //    //    lat: -16.447979,
                        //    //    lng: -71.5368748,
                        //    // },
                        // ]}
                     />
                  </div>
               }
               {selectPosition && (
                  <InfoWindow
                     position={{
                        lat: selectPosition.lat,
                        lng: selectPosition.lng,
                     }}
                     onCloseClick={() => {
                        handleSelectPointNull();
                     }}
                  >
                     <div>
                        <h6>Informacion</h6>
                        <span>{selectPosition.lat}</span>
                     </div>
                  </InfoWindow>
               )}
            </GoogleMap>
         </div>
      );
   }
}

export default withScriptjs(withGoogleMap(Map));
