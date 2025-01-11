export type OfferExtended = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
      longitude: number;
        zoom: number;
  };
  isFavorite: boolean;
    isPremium: boolean;
      rating: number;
        description: string;
  bedrooms: number;
    goods: string[] | null;
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[] | null;
  maxAdults: number;
}
