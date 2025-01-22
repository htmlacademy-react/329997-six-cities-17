import { memo } from 'react';
import classNames from 'classnames';
import OfferItem from '../offer-item/offer-item';
import { OfferPageType } from '../../const/const';
import type { OfferList } from './types';

function OfferList(props: OfferList): JSX.Element {
  const { offers, pageType, onOfferMouseEnter, onOfferMouseLeave } = props;

  return (
    <div className={classNames(
      { 'cities__places-list': pageType === OfferPageType.CITIES },
      { 'near-places__list': pageType === OfferPageType.NEAR_PLACES },
      { 'favorites__list': pageType === OfferPageType.FAVORITES },
      'places__list',
      { 'tabs__content': pageType === OfferPageType.CITIES })}
    >
      {offers && offers.map((element) => (
        <OfferItem
          key={element.id}
          offer={element}
          pageType={pageType}
          onPlaceMouseEnter={onOfferMouseEnter}
          onPlaceMouseLeave={onOfferMouseLeave}
        />
      ))}
    </div>
  );
}

export default memo(OfferList);
