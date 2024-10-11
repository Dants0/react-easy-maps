import { MapProviderProps } from "@/types/MapType";
import { libraries } from "@/utils/libraries";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import 'dotenv/config'

console.log(process.env)

export function MapProvider({ children }: MapProviderProps) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey:process.env.API_KEY as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return <>{children}</>;
}