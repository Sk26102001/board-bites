import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

interface Props {
  onLocationSelect: (lat: number, lng: number) => void;
}

export default function LocationPicker({ onLocationSelect }: Props) {
  const [position, setPosition] = useState<[number, number] | null>(null);
const defaultCenter: [number, number] = [25.2048, 55.2708];
  function LocationSelector() {
    useMapEvents({
      click(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        setPosition([lat, lng]);
        onLocationSelect(lat, lng); // send numbers only
      },
    });
    return null;
  }

  return (
    <MapContainer
    center={defaultCenter}
     
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationSelector />
      {position && <Marker position={position} />}
    </MapContainer>
  );
}