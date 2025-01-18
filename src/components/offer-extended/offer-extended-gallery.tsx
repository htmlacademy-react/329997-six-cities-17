import { memo } from 'react';
import { MAX_PHOTOS_COUNT } from '../../const/const';

type OfferExtendedGalleryProps = {
  images?: string[];
}

function OfferExtendedGallery(props: OfferExtendedGalleryProps): JSX.Element {
  const { images } = props;
  const imagesShown = images?.slice(0, MAX_PHOTOS_COUNT);
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imagesShown && imagesShown.map((element) => (
          <div className="offer__image-wrapper" key={element}>
            <img className="offer__image" src={element} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div >
  );
}

export default memo(OfferExtendedGallery);
