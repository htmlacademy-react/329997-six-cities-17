import { memo } from 'react';
import type { OfferExtendedFacilities } from './types';

function OfferExtendedFacilities(props: OfferExtendedFacilities): JSX.Element {
  const { goods } = props;

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods && goods.map((element) => (
          <li className="offer__inside-item" key={element}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(OfferExtendedFacilities);
