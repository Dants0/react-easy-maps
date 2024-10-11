import MapComponent from "@/components/MapComponent";
import { MapProvider } from "@/provider/MapProvider";
import { MapComponentProps } from "@/types/MapType";

export default function EasyMap({lat, lon}:MapComponentProps){
  return (
    <MapProvider>
    <MapComponent lat={lat} lon={lon} />
  </MapProvider>
  )
}