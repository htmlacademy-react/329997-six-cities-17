import { useRef, useEffect, memo } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';
import useMap from '../hooks/use-map';
import { MAP_MARKER_CURRENT, MAP_MARKER_DEFAULT, OfferPageType } from '../../const/const';
import type { Map } from './types';

const defaultMapPin = new Icon({
  iconUrl: MAP_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [30, 40]
});

const currentMapPin = new Icon({
  iconUrl: MAP_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [30, 40]
});

function Map(props: Map): JSX.Element {
  const { city, offers, selectedOffer, offerExtended, mapType = 'cities' } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers?.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          selectedOffer && offer.id === selectedOffer.id
            ? currentMapPin
            : defaultMapPin
        ).addTo(markerLayer);
      });

      if (offerExtended) {
        const marker = new Marker({
          lat: offerExtended.location.latitude,
          lng: offerExtended.location.longitude
        });
        marker.setIcon(currentMapPin).addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, offerExtended]);

  return (
    <section className={classNames(
      'map',
      { 'cities__map': mapType === OfferPageType.CITIES },
      { 'offer__map': mapType === OfferPageType.NEAR_PLACES })}
    ref={mapRef}
    >
    </section >
  );
}

export default memo(Map);
