"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Destination } from "../types/destination";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

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

      {places.map(place => (
        <Marker key={place.id} position={[place.lat, place.lng]}>
          <Popup>{place.name.en}</Popup>
        </Marker>
      ))}

      <Polyline positions={route} />
    </MapContainer>
  );
}

export default MapComponent;

