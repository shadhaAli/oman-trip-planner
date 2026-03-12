"use client";

import dynamic from "next/dynamic";
import { Destination } from "../types/destination";

const MapWithNoSSR = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => <div style={{ height: "500px", width: "100%", background: "#f0f0f0" }}>Loading map...</div>
});

export default function TripMap({ places, showRoute = false }: { places: Destination[], showRoute?: boolean }) {
  return <MapWithNoSSR places={places} showRoute={showRoute} />;
}

