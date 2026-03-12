# Oman Trip Planner - Google Maps-like Enhancements Plan

## Information Gathered
- **Current Implementation**: Uses Leaflet with OSRM for routes, destination selection UI, Arabic/English support
- **Key Files**: 
  - `src/components/MapComponent.tsx` - Leaflet map with route calculation
  - `src/components/TripMap.tsx` - Wrapper with dynamic import
  - `src/app/page.tsx` - Main page with trip planning UI
  - `src/lib/get-destinations.ts` - 40+ Oman destinations with lat/lng data
  - `src/app/globals.css` - Styling with RTL support

## Plan

### 1. Map Component Enhancements ✅
- [x] Added `showRoute` prop to TripMap
- [x] Updated page.tsx to use route when in trip mode
- [ ] Add traffic layer overlay
- [ ] Add street view integration
- [ ] Real-time route recalculation

### 2. Route Planning UI ✅
- [x] Trip mode with numbered itinerary (start/end markers)
- [x] Route info panel (distance, time, stops)
- [ ] Drag-and-drop route reordering
- [ ] Add/remove stops mid-trip
- [ ] Reverse route option

### 3. Advanced Features
- [ ] Search bar with autocomplete (Google Places)
- [ ] Traffic conditions overlay
- [ ] Multiple route options (fastest, scenic, etc.)
- [ ] Export trip (KML, GPX, PDF)
- [ ] Save/share trips

### 4. Visual Improvements
- [ ] Google Maps-style controls (zoom, layers)
- [ ] 3D building view toggle
- [ ] Street View pegman
- [ ] Custom styled map tiles

### 5. Mobile Optimizations
- [ ] Touch gestures (pinch zoom, drag)
- [ ] Fullscreen map mode
- [ ] Geolocation "center on me"

## Dependent Files to Edit
```
src/components/MapComponent.tsx  - Add Google Maps API integration
src/app/page.tsx               - Add search & advanced controls [Partial ✅]
src/components/TripMap.tsx      - Route visualization enhancements [Partial ✅]
src/app/globals.css            - Google Maps-style styling
```

## Followup Steps
1. Install Google Maps API key
2. Add search autocomplete component
3. Implement drag-to-reorder stops
4. Add traffic/satellite layers
5. Test on mobile devices

**Next Step**: Implement Google Maps API integration or provide more image links?
