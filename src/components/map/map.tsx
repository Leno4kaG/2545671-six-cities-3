import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import { Offer, TLocation } from '../../types/offer';
import pin from '../../img/pin.svg';
import pinActive from '../../img/pin-active.svg';

const defaultIcon = leaflet.icon({
  iconUrl: pin,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const currentIcon = leaflet.icon({
  iconUrl: pinActive,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

type MapProps = {
  offers: Offer[];
  location: TLocation;
  className: string;
  activeOfferId: string | null;
  allowHover?: boolean;
}

function Map({ location, offers, className, activeOfferId, allowHover = true }: MapProps): JSX.Element {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && leafletMapRef.current === null) {
      const map = leaflet.map(mapRef.current).setView(
        [location.latitude, location.longitude],
        location.zoom
      );

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

      leafletMapRef.current = map;
    }
  }, [location]);

  useEffect(() => {
    const leafletMap = leafletMapRef.current;

    if (!leafletMap) {
      return;
    }

    const markers: leaflet.Marker[] = offers.map((offer) => leaflet.marker(
      [offer.location.latitude, offer.location.longitude],
      {
        icon: offer.id === activeOfferId ? currentIcon : defaultIcon,
      }).addTo(leafletMap));

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [offers, activeOfferId, allowHover]);

  return (
    <div
      ref={mapRef}
      style={{ height: '500px' }}
      className={className}
      data-active-offer-id={activeOfferId ?? ''}
    >
    </div>
  );
}

export default Map;
