"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Building, Crosshair } from 'lucide-react';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const userIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocateControl({ setUserLocation }: { setUserLocation: (pos: [number, number]) => void }) {
  const map = useMap();
  const [isLocating, setIsLocating] = useState(false);

  useEffect(() => {
    map.on('locationfound', (e) => {
      setIsLocating(false);
      setUserLocation([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, 15);
    });

    map.on('locationerror', (e) => {
      setIsLocating(false);
      alert("No pudimos obtener tu ubicación. Por favor, asegúrate de haber dado los permisos necesarios en tu navegador.");
      console.error(e.message);
    });

    return () => {
      map.off('locationfound');
      map.off('locationerror');
    };
  }, [map, setUserLocation]);

  const handleLocate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLocating(true);
    map.locate({ setView: false, maxZoom: 16 });
  };

  return (
    <div className="leaflet-top leaflet-right" style={{ pointerEvents: 'auto', marginTop: '10px', marginRight: '10px' }}>
      <button 
        onClick={handleLocate}
        disabled={isLocating}
        style={{
          background: '#FFFFFF',
          border: '2px solid rgba(0,0,0,0.2)',
          borderRadius: '4px',
          width: '34px',
          height: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
          color: isLocating ? '#10B981' : '#292524',
          transition: 'color 0.2s'
        }}
        title="Ubícame"
      >
        <Crosshair size={20} className={isLocating ? 'pulse' : ''} />
      </button>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .pulse {
          animation: pulse 1s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default function MapComponent({ obras, onSelectObra }: { obras: any[], onSelectObra?: (obra: any) => void }) {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

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
      
      <LocateControl setUserLocation={setUserLocation} />

      {userLocation && (
        <Marker position={userLocation} icon={userIcon}>
          <Popup>¡Estás aquí!</Popup>
        </Marker>
      )}
      
      {obras.map((obra) => (
        <Marker 
          key={obra.id} 
          position={[obra.latitud, obra.longitud]} 
          icon={customIcon}
          eventHandlers={{
            click: () => onSelectObra && onSelectObra(obra),
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
