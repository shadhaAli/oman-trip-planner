"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Destination } from "../types/destination";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";

const startIcon = new Icon({
  iconUrl: "/icon/start.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const endIcon = new Icon({
  iconUrl: "/icon/end.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const defaultIcon = new Icon({
  iconUrl: "/icon/mountain.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24]
});

function MapComponent({ places }: { places: Destination[] }) {
  const route: LatLngExpression[] = places.map(p => [p.lat, p.lng] as LatLngExpression);

  return (
    <MapContainer
      center={[23.5, 58]}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="Map"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place, index) => {
        let icon = defaultIcon;
        if (index === 0 && places.length > 1) {
          icon = startIcon;
        } else if (index === places.length - 1 && places.length > 1) {
          icon = endIcon;
        }
        
        return (
          <Marker key={place.id} position={[place.lat, place.lng]} icon={icon}>
            <Popup>{place.name.en}</Popup>
          </Marker>
        );
      })}

      <Polyline positions={route} />
    </MapContainer>
  );
}

export default MapComponent;

