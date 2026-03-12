"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Destination } from "../types/destination";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon, divIcon } from "leaflet";

function createCircleIcon(color: string, size: number = 24) {
  return divIcon({
    className: "custom-marker",
    html: `<div style="
      background-color: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

const startIcon = createCircleIcon("#22c55e", 28);
const endIcon = createCircleIcon("#ef4444", 28);
const defaultIcon = createCircleIcon("#3b82f6", 22);

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

