"use client";

import { MapComponentProps } from "@/types/MapType";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "5px",
};

export default function MapComponent({ lat, lon }: MapComponentProps) {

  const defaultMapCenter = {
    lat: lat,
    lng: lon,
  };

  const defaultMapZoom = 18;

  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
  };

  return (
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker position={defaultMapCenter}/>
      </GoogleMap>
  );
}