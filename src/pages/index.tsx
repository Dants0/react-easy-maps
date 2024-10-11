// index.tsx

import MapComponent from "@/components/MapComponent"; // Ajuste o caminho conforme sua estrutura
import EasyMap from "@/mono/EasyMap";
import { MapProvider } from "@/provider/MapProvider";
import { useState } from "react";

export default function Home() {
  // Exemplo de coordenadas: latitude e longitude
  const [location] = useState({ lat: -23.55052, lon: -46.633308 }); // São Paulo, Brasil

  return (
    <EasyMap lat={location.lat} lon={location.lon} />
  );
}
