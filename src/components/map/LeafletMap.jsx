// components/LeafletMap.jsx
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
  iconUrl: "/leaflet/images/marker-icon.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

const markerIcon = new L.Icon({
  iconUrl: "/assets/icons/marker-icon.png",
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const LeafletMap = () => {
  const [isMounted, setIsMounted] = useState(false); // State to check if mounted
  const position = [9.8965, 8.8583]; // Latitude and longitude of Jos, Nigeria

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true on component mount
  }, []);

  return (
    isMounted && (
      <MapContainer center={position} zoom={15} style={{ height: "700px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>Km 11, Bukuru Express, Jos, Plateau State, Nigeria</Popup>
        </Marker>
      </MapContainer>
    )
  );
};

export default LeafletMap;
