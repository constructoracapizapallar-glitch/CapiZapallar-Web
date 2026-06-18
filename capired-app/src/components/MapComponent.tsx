"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Building, DollarSign } from 'lucide-react';
import { createRoot } from 'react-dom/client';

// Fix Leaflet's default icon issue in Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent({ obras, onSelectObra }: { obras: any[], onSelectObra: (obra: any) => void }) {
  return (
    <MapContainer 
      center={[-32.5539, -71.4646]} // Zapallar
      zoom={14} 
      style={{ height: '100%', width: '100%', borderRadius: '8px', zIndex: 10 }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {obras.map((obra) => (
        <Marker 
          key={obra.id} 
          position={[obra.latitud, obra.longitud]} 
          icon={customIcon}
          eventHandlers={{
            click: () => onSelectObra(obra),
          }}
        >
          <Popup>
            <div style={{ padding: '5px' }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#292524' }}>{obra.titulo}</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#78716C', display: 'flex', alignItems: 'center', gap: '4px' }}><Building size={12}/> {obra.especialidad}</p>
              <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#10B981', fontWeight: 'bold' }}>{obra.presupuesto}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
