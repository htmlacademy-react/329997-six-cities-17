import { Helmet } from 'react-helmet-async';
import { useEffect, memo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import CommentForm from '../../components/comment/comment-form';
import ReviewList from '../../components/review/review-list';
import Map from '../../components/map/map';
import { OfferPageType, AuthorizationState, NEAR_PACES_COUNT, FetchState, AppRoute } from '../../const/const';
import OfferList from '../../components/offer/offer-list';
import { useAppSelector } from '../../components/hooks';
import { fetchOfferExtendedAction, fetchOfferExtendedCommentsAction, fetchOfferExtendedNearbyAction } from '../../store/api-action';
import { useAppDispatch } from '../../components/hooks';
import OfferExtendedGallery from '../../components/offer-extended/offer-extended-gallery';
import OfferExtendedInfo from '../../components/offer-extended/offer-extended-info';
import OfferExtendedFacilities from '../../components/offer-extended/offer-extended-facilities';
import OfferExtendedHost from '../../components/offer-extended/offer-extended-host';
import useScrollToTop from '../../components/hooks/sctroll-to-top';
import Loading from '../../components/loading/loading';
import { getOfferExtended, getOfferExtendedComments, getOfferExtendedState } from '../../store/offer-extended-process/offer-extended-process.selectors';
import { getAuthorizationState } from '../../store/auth-process/auth-process.selectors';
import { getOffersNearby } from '../../store/offer-extended-nearby-process/offer-extended-nearby-process.selectors';

function OfferPage(): JSX.Element {
  useScrollToTop();
  const currentOffer = useAppSelector(getOfferExtended);
  const currentOfferState = useAppSelector(getOfferExtendedState);
  const currentOfferComments = useAppSelector(getOfferExtendedComments);
  const currentOfferNearby = useAppSelector(getOffersNearby);
  const offersNearby = currentOfferNearby && currentOfferNearby.slice(0, NEAR_PACES_COUNT);
  const isAuth = useAppSelector(getAuthorizationState) === AuthorizationState.Auth;

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferExtendedAction(id));
      dispatch(fetchOfferExtendedCommentsAction(id));
      dispatch(fetchOfferExtendedNearbyAction(id));
    }
  }, [id, dispatch]);

  if (currentOfferState === FetchState.Loading) {
    return <Loading />;
  }
  if (currentOfferState === FetchState.Error || !id) {
    return <Navigate to={AppRoute.NotFound} />;

  }

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities. Предложение</title>
      </Helmet>
      <section className="offer">

        <OfferExtendedGallery images={currentOffer.images} />

        <div className="offer__container container">
          <div className="offer__wrapper">

            <OfferExtendedInfo offer={currentOffer} />

            <OfferExtendedFacilities goods={currentOffer.goods} />

            <OfferExtendedHost offer={currentOffer} />

            <section className="offer__reviews reviews">
              <ReviewList offerComments={currentOfferComments} />
              {isAuth &&
                <CommentForm id={id} />}
            </section>
          </div>
        </div>
        {offersNearby && <Map city={currentOffer.city} offers={offersNearby} mapType={OfferPageType.NEAR_PLACES} offerExtended={currentOffer} />}
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

export default memo(OfferPage);
