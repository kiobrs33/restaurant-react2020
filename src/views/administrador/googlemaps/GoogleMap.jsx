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

class Map extends React.Component {
   state = {
      position: null,
   };

   handleSelectPoint = (dataPosition) => {
      this.setState({ position: dataPosition });
   };

   handleSelectPointNull = () => {
      this.setState({ position: null });
   };
   render() {
      const { handleSelectPoint, handleSelectPointNull } = this;
      const { position } = this.state;
      const { mainPosition, clientPosition } = this.props;

      return (
         <div>
            <GoogleMap
               defaultZoom={16}
               defaultCenter={{
                  lat: mainPosition.lat,
                  lng: mainPosition.lng,
               }}
            >
               {
                  <div>
                     <Marker
                        position={{
                           lat: mainPosition.lat,
                           lng: mainPosition.lng,
                        }}
                        onClick={() => {
                           handleSelectPoint(mainPosition);
                        }}
                        icon={{
                           url: iconTienda,
                           scaledSize: new window.google.maps.Size(40, 40),
                        }}
                     />
                     <Marker
                        position={{
                           lat: clientPosition.lat,
                           lng: clientPosition.lng,
                        }}
                        onClick={() => {
                           handleSelectPoint(clientPosition);
                        }}
                        icon={{
                           url: iconClient,
                           scaledSize: new window.google.maps.Size(40, 40),
                        }}
                     />
                     <Polyline
                        path={[
                           { lat: mainPosition.lat, lng: mainPosition.lng },
                           { lat: clientPosition.lat, lng: clientPosition.lng },
                        ]}
                     />
                  </div>
               }
               {position && (
                  <InfoWindow
                     position={{ lat: position.lat, lng: position.lng }}
                     onCloseClick={() => {
                        handleSelectPointNull();
                     }}
                  >
                     <div>
                        <h6>Descripcion</h6>
                        <span>{position.lat}</span>
                     </div>
                  </InfoWindow>
               )}
            </GoogleMap>
         </div>
      );
   }
}

export default withScriptjs(withGoogleMap(Map));
