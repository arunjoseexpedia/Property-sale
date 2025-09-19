import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon issue in react-leaflet by setting icon manually:
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      // For demo, generate random offset from clicked point
      const randomLat = e.latlng.lat + (Math.random() - 0.5) * 0.1;
      const randomLng = e.latlng.lng + (Math.random() - 0.5) * 0.1;
      onMapClick(randomLat.toFixed(6), randomLng.toFixed(6));
    },
  });
  return null;
};

const LeafletMap = ({ onMapClick }) => {
  const position = [34.0522, -118.2437]; 

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      {/* Map tiles from OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {onMapClick && <MapClickHandler onMapClick={onMapClick} />}

      {/* Marker */}
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
