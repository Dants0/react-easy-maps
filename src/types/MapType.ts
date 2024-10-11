import { ReactNode } from "react";

export interface MapProviderProps {
  children: ReactNode;
}

export interface MapComponentProps {
  lat: number;
  lon: number;
}