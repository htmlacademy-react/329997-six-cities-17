import { Helmet } from 'react-helmet-async';
import CommentForm from '../../components/comment/comment-form';
import ReviewList from '../../components/review/review-list';
import Map from '../../components/map/map';
import { OfferPageType, AuthorizationStatus, NEAR_PACES_COUNT } from '../../const/const';
import OfferList from '../../components/offer/offer-list';
import { useAppSelector } from '../../components/hooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOfferExtendedAction, fetchOfferExtendedCommentsAction, fetchOffersNearbyAction } from '../../store/api-action';
import { useAppDispatch } from '../../components/hooks';
import OfferExtendedGallery from '../../components/offer-extended/offer-extended-gallery';
import OfferExtendedInfo from '../../components/offer-extended/offer-extended-info';
import OfferExtendedFacilities from '../../components/offer-extended/offer-extended-facilities';
import OfferExtendedHost from '../../components/offer-extended/offer-extended-host';
import { getAuthorizationStatus, getOfferExtended, getOfferExtendedComments, getOffersNearby } from '../../store/selectors';

function OfferPage(): JSX.Element {

  const currentOffer = useAppSelector(getOfferExtended);
  const currentOfferComments = useAppSelector(getOfferExtendedComments);
  const currentOfferNearby = useAppSelector(getOffersNearby);
  const offersNearby = currentOfferNearby && currentOfferNearby.slice(0, NEAR_PACES_COUNT);
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  const { id } = useParams<{
    id: string;
  }>();

  useEffect(() => {
    if (id && (currentOffer === null || currentOffer.id !== id)) {
      dispatch(fetchOfferExtendedAction(id));
      dispatch(fetchOfferExtendedCommentsAction(id));
      dispatch(fetchOffersNearbyAction(id));
    }
  }, [id, currentOffer, dispatch]);

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities. Предложение</title>
      </Helmet>
      <section className="offer">

        {currentOffer && <OfferExtendedGallery images={currentOffer.images} />} {/* по-моему я как-то не так борюсь с null? */}

        <div className="offer__container container">
          <div className="offer__wrapper">

            {currentOffer && <OfferExtendedInfo offer={currentOffer} />} {/* по-моему я как-то не так борюсь с null? */}

            {currentOffer && <OfferExtendedFacilities goods={currentOffer.goods} />} {/* по-моему я как-то не так борюсь с null? */}

            {currentOffer && <OfferExtendedHost offer={currentOffer} />} {/* по-моему я как-то не так борюсь с null? */}

            <section className="offer__reviews reviews">
              {currentOffer && <ReviewList offerComments={currentOfferComments} />} {/* по-моему я как-то не так борюсь с null? */}
              {isAuth &&
                <CommentForm />}
            </section>
          </div>
        </div>
        {currentOffer && <Map city={currentOffer.city} offers={offersNearby} mapType={OfferPageType.NEAR_PLACES} offerExtended={currentOffer} />} {/* по-моему я как-то не так борюсь с null? */}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OfferList offers={offersNearby} pageType={OfferPageType.NEAR_PLACES} />
        </section>
      </div >
    </main >
  );
}

export default OfferPage;
