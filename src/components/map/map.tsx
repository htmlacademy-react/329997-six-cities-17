import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';
import { MAP_MARKER_CURRENT, MAP_MARKER_DEFAULT } from '../../const';
import { City } from '../../types/city_types/city-type';
import { Offer } from '../../types/offer-type';


type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | null;
};

const defaultMapPin = new Icon({
  iconUrl: MAP_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentMapPin = new Icon({
  iconUrl: MAP_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const { city, offers, selectedOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          selectedOffer !== null && offer.id === selectedOffer.id
            ? currentMapPin
            : defaultMapPin
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div style={{ height: '794px' }} ref={mapRef}></div>;
}

export default Map;
