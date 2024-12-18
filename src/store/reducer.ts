import { createReducer } from '@reduxjs/toolkit';
import { mockOffers } from '../mocks/offers';
import { changeCity } from './action';
import { loadOffers } from './action';
import { getCurrentLocationOffers } from '../utils';
import { Offer } from '../types/offer-type';


const initialState: {
  city: string;
  offers: Offer[];
  currentOffers: Offer[];
} =
{
  city: 'Paris',
  offers: mockOffers,
  currentOffers: [],
};

//для загрузки офферов для парижа при старте приложения я так понимаю нужно будет дернуть хранилище при инициализации?

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(loadOffers, (state) => {
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    });
});

export { reducer };
