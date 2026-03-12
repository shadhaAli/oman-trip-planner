"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { Destination } from "../types/destination";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon, divIcon, LatLngBounds } from "leaflet";
import { useEffect, useState } from "react";

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

// Component to fit map bounds to show all markers
function MapBounds({ places }: { places: Destination[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (places.length > 0) {
      const bounds = new LatLngBounds(
        places.map(p => [p.lat, p.lng] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [places, map]);
  
  return null;
}

interface RouteInfo {
  distance: number; // in km
  duration: number; // in minutes
  geometry: [number, number][];
}

async function fetchRoute(start: [number, number], end: [number, number]): Promise<RouteInfo | null> {
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.code === "Ok" && data.routes.length > 0) {
      const route = data.routes[0];
      return {
        distance: route.distance / 1000, // Convert to km
        duration: route.duration / 60, // Convert to minutes
        geometry: route.geometry.coordinates.map((c: number[]) => [c[1], c[0]] as [number, number])
      };
    }
  } catch (error) {
    console.error("Error fetching route:", error);
  }
  return null;
}

async function fetchFullRoute(places: Destination[]): Promise<RouteInfo | null> {
  if (places.length < 2) return null;
  
  try {
    // Build waypoints string for all points
    const coordinates = places.map(p => `${p.lng},${p.lat}`).join(";");
    const url = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.code === "Ok" && data.routes.length > 0) {
      const route = data.routes[0];
      return {
        distance: route.distance / 1000,
        duration: route.duration / 60,
        geometry: route.geometry.coordinates.map((c: number[]) => [c[1], c[0]] as [number, number])
      };
    }
  } catch (error) {
    console.error("Error fetching full route:", error);
  }
  return null;
}

function MapComponent({ places, showRoute = false }: { places: Destination[], showRoute?: boolean }) {
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [loadingRoute, setLoadingRoute] = useState(false);
  
  useEffect(() => {
    if (showRoute && places.length >= 2) {
      setLoadingRoute(true);
      fetchFullRoute(places).then(route => {
        setRouteInfo(route);
        setLoadingRoute(false);
      });
    } else {
      setRouteInfo(null);
    }
  }, [places, showRoute]);
  
  // Calculate straight line distance for fallback
  const calculateStraightLineDistance = (places: Destination[]): number => {
    let totalDistance = 0;
    for (let i = 0; i < places.length - 1; i++) {
      const from = places[i];
      const to = places[i + 1];
      const R = 6371; // Earth's radius in km
      const dLat = (to.lat - from.lat) * Math.PI / 180;
      const dLon = (to.lng - from.lng) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(from.lat * Math.PI / 180) * Math.cos(to.lat * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      totalDistance += R * c;
    }
    return totalDistance;
  };
  
  const straightLineDistance = places.length >= 2 ? calculateStraightLineDistance(places) : 0;
  
  // Estimate driving time (assume average 60 km/h)
  const estimatedTime = straightLineDistance > 0 ? Math.round(straightLineDistance / 60 * 60) : 0;

  // Fallback straight line route
  const straightRoute: LatLngExpression[] = places.map(p => [p.lat, p.lng] as LatLngExpression);

  return (
    <div>
      {places.length >= 2 && (
        <div className="route-info" style={{
          padding: "12px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          borderRadius: "8px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div>
              <span style={{ fontSize: "12px", opacity: 0.9 }}>📏 Distance</span>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                {loadingRoute ? "..." : routeInfo ? `${routeInfo.distance.toFixed(1)} km` : `${straightLineDistance.toFixed(1)} km`}
              </div>
            </div>
            <div>
              <span style={{ fontSize: "12px", opacity: 0.9 }}>⏱️ Duration</span>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                {loadingRoute ? "..." : routeInfo ? `${Math.round(routeInfo.duration)} min` : `${estimatedTime} min (est.)`}
              </div>
            </div>
            <div>
              <span style={{ fontSize: "12px", opacity: 0.9 }}>📍 Stops</span>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>{places.length}</div>
            </div>
          </div>
          {routeInfo && (
            <div style={{ fontSize: "12px", opacity: 0.8 }}>
              🛣️ Driving Route
            </div>
          )}
        </div>
      )}
      
      <MapContainer
        center={[23.5, 58]}
        zoom={6}
        style={{ height: "500px", width: "100%", borderRadius: "12px" }}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        zoomControl={true}
        closePopupOnClick={false}
        dragging={true}
      >
        <MapBounds places={places} />
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
              <Popup>
                <div style={{ minWidth: "150px" }}>
                  <strong style={{ fontSize: "14px" }}>{place.name.en}</strong>
                  <br />
                  <span style={{ fontSize: "12px", color: "#666" }}>{place.region.en}</span>
                  {index === 0 && places.length > 1 && (
                    <div style={{ marginTop: "5px", color: "#22c55e", fontSize: "11px" }}>🚩 Start</div>
                  )}
                  {index === places.length - 1 && places.length > 1 && (
                    <div style={{ marginTop: "5px", color: "#ef4444", fontSize: "11px" }}>🏁 End</div>
                  )}
                  {index > 0 && index < places.length - 1 && places.length > 2 && (
                    <div style={{ marginTop: "5px", color: "#3b82f6", fontSize: "11px" }}>📍 Stop {index + 1}</div>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Show driving route if available, otherwise show straight line */}
        {routeInfo ? (
          <Polyline 
            positions={routeInfo.geometry as LatLngExpression[]} 
            color="#667eea" 
            weight={4}
            opacity={0.8}
            dashArray="10, 10"
          />
        ) : (
          <Polyline positions={straightRoute} color="#3b82f6" weight={2} opacity={0.5} />
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;

