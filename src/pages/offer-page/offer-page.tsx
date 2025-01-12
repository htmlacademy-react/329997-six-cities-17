import { Helmet } from 'react-helmet-async';
import CommentForm from '../../components/comment/comment-form';
import ReviewList from '../../components/review/review-list';
import Map from '../../components/map/map';
import { OfferPageType, AuthorizationStatus, NEAR_PACES_COUNT, FetchStatus, AppRoute } from '../../const/const';
import OfferList from '../../components/offer/offer-list';
import { useAppSelector } from '../../components/hooks';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOfferExtendedAction, fetchOfferExtendedCommentsAction, fetchOffersNearbyAction } from '../../store/api-action';
import { useAppDispatch } from '../../components/hooks';
import OfferExtendedGallery from '../../components/offer-extended/offer-extended-gallery';
import OfferExtendedInfo from '../../components/offer-extended/offer-extended-info';
import OfferExtendedFacilities from '../../components/offer-extended/offer-extended-facilities';
import OfferExtendedHost from '../../components/offer-extended/offer-extended-host';
import { getAuthorizationStatus, getOfferExtended, getOfferExtendedComments, getOfferExtendedState, getOffersNearby } from '../../store/selectors';
import useScrollToTop from '../../components/hooks/sctroll-to-top';
import Loading from '../../components/loading/loading';

function OfferPage(): JSX.Element {
  useScrollToTop();
  const currentOffer = useAppSelector(getOfferExtended);
  const currentOfferState = useAppSelector(getOfferExtendedState);
  const currentOfferComments = useAppSelector(getOfferExtendedComments);
  const currentOfferNearby = useAppSelector(getOffersNearby);
  const offersNearby = currentOfferNearby && currentOfferNearby.slice(0, NEAR_PACES_COUNT);
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id && currentOffer.id !== id) {
      dispatch(fetchOfferExtendedAction(id));
      dispatch(fetchOfferExtendedCommentsAction(id));
      dispatch(fetchOffersNearbyAction(id));
    }
  }, [id, currentOffer.id, dispatch]);

  if (currentOfferState === FetchStatus.Loading) {
    return <Loading />;
  }
  if (currentOfferState === FetchStatus.Error) {
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
                <CommentForm id={id} />} {/*как побороть undefined? */}
            </section>
          </div>
        </div>
        <Map city={currentOffer.city} offers={offersNearby} mapType={OfferPageType.NEAR_PLACES} offerExtended={currentOffer} />
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
