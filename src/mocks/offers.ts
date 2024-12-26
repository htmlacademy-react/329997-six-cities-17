import { Offer } from '../types/offer-type';

const mockOffers: Offer[] =
  [
    {
      id: '7ea28779-9fff-4d07-bfa5-ef11af98fe46',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'room',
      price: 107,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.868610000000004,
        longitude: 2.342499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.1
    },
    {
      id: '15b65448-1fa3-4ae8-ba4d-2eac3bf79327',
      title: 'Amazing and Extremely Central Flat',
      type: 'apartment',
      price: 477,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.858610000000006,
        longitude: 2.330499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 5
    },
    {
      id: '0df0aad6-87a4-40b4-bc97-3e6e9550bea3',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'room',
      price: 223,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.834610000000005,
        longitude: 2.335499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.9
    },
    {
      id: '0ca0961a-e1d3-4428-88ec-fbf14f9077e1',
      title: 'Canal View Prinsengracht',
      type: 'room',
      price: 155,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.85761,
        longitude: 2.358499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.2
    },
    {
      id: 'dcdc267d-fb1e-43fe-aa7d-76ba51df0c79',
      title: 'House in countryside',
      type: 'room',
      price: 264,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.87561,
        longitude: 2.375499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.2
    },
    {
      id: 'c18cb370-8405-4293-908a-80cf5ffa19c7',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'room',
      price: 198,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.87961000000001,
        longitude: 2.353499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3
    },
    {
      id: '3152a2ae-4277-424e-8d55-2989fa747e99',
      title: 'Canal View Prinsengracht',
      type: 'house',
      price: 931,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.834610000000005,
        longitude: 2.364499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.8
    },
    {
      id: '216cc829-9040-47dd-8e20-f1642c8b54be',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'room',
      price: 220,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.837610000000005,
        longitude: 2.3454990000000002,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.8
    },
    {
      id: '517c7160-543b-409a-a364-e3559130c04c',
      title: 'The Pondhouse - A Magical Place',
      type: 'apartment',
      price: 390,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.84761,
        longitude: 2.356499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.2
    },
    {
      id: 'd192b276-8590-406d-90b0-417679884bde',
      title: 'Canal View Prinsengracht',
      type: 'hotel',
      price: 277,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.862610000000004,
        longitude: 2.369499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.2
    },
    {
      id: '47404a7c-58de-4b80-b417-d3c8ba99843e',
      title: 'Tile House',
      type: 'house',
      price: 522,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.83861,
        longitude: 2.350499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.6
    },
    {
      id: '40f50bbf-991f-4cae-bf41-19126a20f5ce',
      title: 'Canal View Prinsengracht',
      type: 'apartment',
      price: 465,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.861610000000006,
        longitude: 2.340499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1
    },
    {
      id: 'e7dddf56-8efb-4269-8935-35109d51c5cb',
      title: 'Loft Studio in the Central Area',
      type: 'hotel',
      price: 209,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.87861,
        longitude: 2.357499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.8
    },
    {
      id: '4dd40641-8137-41af-a4e8-b5686554b7da',
      title: 'Perfectly located Castro',
      type: 'room',
      price: 224,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.877610000000004,
        longitude: 2.333499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.4
    },
    {
      id: 'e82c9bf8-dc0b-4096-9d30-1a3393ebcb05',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'house',
      price: 704,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.83961,
        longitude: 2.342499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.3
    },
    {
      id: 'b8cd323c-a175-4968-b50d-de8a1190143a',
      title: 'Canal View Prinsengracht',
      type: 'house',
      price: 661,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.865610000000004,
        longitude: 2.350499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.8
    },
    {
      id: '160e09af-396d-4e89-9bc4-3cfbfe48252c',
      title: 'Perfectly located Castro',
      type: 'hotel',
      price: 179,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.846610000000005,
        longitude: 2.374499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.8
    },
    {
      id: '3ed27afd-0b41-4867-a4c8-8380d3109178',
      title: 'The Pondhouse - A Magical Place',
      type: 'house',
      price: 418,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.837610000000005,
        longitude: 2.364499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.8
    },
    {
      id: 'b89a8900-bfe2-41d5-913f-c2feab04befa',
      title: 'Tile House',
      type: 'room',
      price: 191,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.843610000000005,
        longitude: 2.338499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.2
    },
    {
      id: '89d487ae-bc80-421e-b17e-2aa6f4e49ee6',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'apartment',
      price: 304,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      location: {
        latitude: 48.84461,
        longitude: 2.374499,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.3
    },
    {
      id: '3fffb098-d8d0-463f-908d-f92f43788013',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'hotel',
      price: 165,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.950361,
        longitude: 6.961974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.1
    },
    {
      id: '0e5311c8-77ad-49d4-89ca-f72b2d5ac20d',
      title: 'The Pondhouse - A Magical Place',
      type: 'house',
      price: 460,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.932361,
        longitude: 6.937974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.6
    },
    {
      id: 'a613f5d0-51f5-4a06-982d-7cad1fdf2ae2',
      title: 'Amazing and Extremely Central Flat',
      type: 'house',
      price: 798,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.934361,
        longitude: 6.943974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.9
    },
    {
      id: 'f602b299-f17a-43aa-89ea-31964fa4cb3a',
      title: 'Canal View Prinsengracht',
      type: 'room',
      price: 269,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.947361,
        longitude: 6.9799739999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.6
    },
    {
      id: 'bf0b4b28-df0f-4d22-b979-32cc4366b121',
      title: 'Loft Studio in the Central Area',
      type: 'hotel',
      price: 413,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.960361,
        longitude: 6.967974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.1
    },
    {
      id: '6a9424f4-2e50-426a-bbf4-b42a9d5280dd',
      title: 'Wood and stone place',
      type: 'apartment',
      price: 322,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.941361,
        longitude: 6.956974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.8
    },
    {
      id: 'e06b357f-cf47-46b7-a08a-4ba56b159559',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'room',
      price: 116,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.916361,
        longitude: 6.944974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4
    },
    {
      id: '3a810412-566e-4636-9a10-b5ab6148f4bb',
      title: 'Canal View Prinsengracht',
      type: 'house',
      price: 757,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.949361,
        longitude: 6.976974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.9
    },
    {
      id: '2f76adf7-b0cd-4ec7-9416-5dd4d54bb4b7',
      title: 'The Joshua Tree House',
      type: 'room',
      price: 237,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.913361,
        longitude: 6.9509739999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.7
    },
    {
      id: '6f3698df-31e2-4dcc-bf13-5e66742f9d40',
      title: 'Wood and stone place',
      type: 'house',
      price: 417,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.930361,
        longitude: 6.937974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.9
    },
    {
      id: '65bd3be1-2f5d-46b7-97d7-fe7c3649f0d8',
      title: 'Perfectly located Castro',
      type: 'hotel',
      price: 187,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.960361,
        longitude: 6.9509739999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.2
    },
    {
      id: '784fc284-3e99-47ad-9fd8-098d08db14e8',
      title: 'The Pondhouse - A Magical Place',
      type: 'house',
      price: 565,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.918461,
        longitude: 6.969974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.4
    },
    {
      id: '4aa6817e-dfd5-45fc-b697-8f21a2b45933',
      title: 'Loft Studio in the Central Area',
      type: 'hotel',
      price: 350,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.957361,
        longitude: 6.9509739999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.2
    },
    {
      id: 'a3b067f2-36fd-47fc-8fa4-49f99a01aad5',
      title: 'Loft Studio in the Central Area',
      type: 'hotel',
      price: 129,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.951361,
        longitude: 6.944974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.2
    },
    {
      id: 'afa4126b-f8e8-45a4-bce5-5cf7a6739fb0',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'hotel',
      price: 221,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.959361,
        longitude: 6.978974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.7
    },
    {
      id: 'c53d6d4e-a005-426c-803a-76f674e1de86',
      title: 'Wood and stone place',
      type: 'hotel',
      price: 284,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.932361,
        longitude: 6.960974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 5
    },
    {
      id: '4c935eb5-dfb8-4794-8289-13f7cce72da8',
      title: 'The Joshua Tree House',
      type: 'apartment',
      price: 396,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.954361,
        longitude: 6.982974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.3
    },
    {
      id: 'd4fd360f-d305-4eb7-b17e-6025e64ca6d2',
      title: 'Waterfront with extraordinary view',
      type: 'hotel',
      price: 284,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.945361,
        longitude: 6.962974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.1
    },
    {
      id: '1d194007-e931-41c5-b49a-e96d8daa0c73',
      title: 'House in countryside',
      type: 'hotel',
      price: 401,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.917361,
        longitude: 6.977974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.9
    },
    {
      id: 'c41c9dcf-395f-4c98-a12c-9262a10a5632',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'house',
      price: 746,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13
        }
      },
      location: {
        latitude: 50.945361,
        longitude: 6.935974,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.8
    },
    {
      id: 'c1206593-7d86-4733-9b67-edc355c132d0',
      title: 'Amazing and Extremely Central Flat',
      type: 'apartment',
      price: 351,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.854557,
        longitude: 4.364697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1
    },
    {
      id: 'd1373974-32b7-4ddb-b3e9-6b71f36f683c',
      title: 'The Joshua Tree House',
      type: 'house',
      price: 360,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.867557,
        longitude: 4.371696999999999,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.8
    },
    {
      id: '52e44174-f612-442e-97ab-d022446c6904',
      title: 'Perfectly located Castro',
      type: 'hotel',
      price: 493,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.827557,
        longitude: 4.336697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.3
    },
    {
      id: '06201662-fdc7-4d57-9bae-c4b0768511fb',
      title: 'House in countryside',
      type: 'room',
      price: 210,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.833557,
        longitude: 4.374696999999999,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.7
    },
    {
      id: '592a2cc8-1531-4cc0-b15b-b26a4783faa8',
      title: 'Waterfront with extraordinary view',
      type: 'hotel',
      price: 127,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.837557,
        longitude: 4.339697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.7
    },
    {
      id: 'f09f5924-d602-48a3-bf5c-05f0adee8ca6',
      title: 'Tile House',
      type: 'room',
      price: 185,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.849557,
        longitude: 4.374696999999999,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.2
    },
    {
      id: '96140328-bfdd-4151-aa78-42d953a44f0f',
      title: 'Perfectly located Castro',
      type: 'apartment',
      price: 104,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.852557,
        longitude: 4.3376969999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.6
    },
    {
      id: 'ae6d49f9-51e9-42b1-b37c-700fe9d197e9',
      title: 'Tile House',
      type: 'hotel',
      price: 282,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.828556999999996,
        longitude: 4.362697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.7
    },
    {
      id: '309ba329-2dc8-4c05-81e0-c61c672a3c19',
      title: 'Loft Studio in the Central Area',
      type: 'house',
      price: 712,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.835556999999994,
        longitude: 4.354697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.3
    },
    {
      id: '6365bb4d-7847-4074-b7f7-aca9a8963fb2',
      title: 'Waterfront with extraordinary view',
      type: 'room',
      price: 214,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.867557,
        longitude: 4.339697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.3
    },
    {
      id: '402171fa-15a2-4623-9de5-d9a969f9571d',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'hotel',
      price: 364,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.839557,
        longitude: 4.346697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.6
    },
    {
      id: '91604dbf-2cbd-4d40-94ac-ba85220f07af',
      title: 'Tile House',
      type: 'apartment',
      price: 375,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.844556999999995,
        longitude: 4.346697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.7
    },
    {
      id: 'ca66681d-3459-4c3f-90cd-44facc04e9f5',
      title: 'The Pondhouse - A Magical Place',
      type: 'hotel',
      price: 404,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.865556999999995,
        longitude: 4.371696999999999,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.3
    },
    {
      id: 'a2b217f3-8db5-4726-a8ae-4e3980bcb075',
      title: 'House in countryside',
      type: 'hotel',
      price: 158,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.869557,
        longitude: 4.332697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.2
    },
    {
      id: 'dd9e8cf0-c6aa-4a23-bcb3-58910b524d75',
      title: 'Perfectly located Castro',
      type: 'room',
      price: 186,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.860557,
        longitude: 4.376697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.8
    },
    {
      id: '6cb42f0a-ccf3-496e-9395-1ad05c5f393f',
      title: 'Amazing and Extremely Central Flat',
      type: 'room',
      price: 203,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.862556999999995,
        longitude: 4.375697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.8
    },
    {
      id: 'c3db7f6f-76ee-46c4-88fd-d003d5d9a7b4',
      title: 'The Joshua Tree House',
      type: 'room',
      price: 114,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.842557,
        longitude: 4.3536969999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.4
    },
    {
      id: '0adf6997-7eb1-4cba-a7e2-ea4b405b89bb',
      title: 'Waterfront with extraordinary view',
      type: 'house',
      price: 467,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.822556999999996,
        longitude: 4.347697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.2
    },
    {
      id: '67381dbb-56ce-45b9-9344-ccc614547145',
      title: 'House in countryside',
      type: 'house',
      price: 309,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.867557,
        longitude: 4.357697,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.7
    },
    {
      id: '2ed891d3-a134-4eb4-844f-d1411c87a342',
      title: 'Tile House',
      type: 'room',
      price: 202,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      location: {
        latitude: 50.842557,
        longitude: 4.363696999999999,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.2
    },
    {
      id: '5f85d5f3-b0e1-4519-9ec9-c1910dc04a93',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'room',
      price: 288,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.36554,
        longitude: 4.911976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2
    },
    {
      id: 'b9f30e0d-09b1-47dd-8486-63acd1d889eb',
      title: 'Amazing and Extremely Central Flat',
      type: 'house',
      price: 982,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.385540000000006,
        longitude: 4.902976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.3
    },
    {
      id: '93080b19-c776-46bc-ac68-13d09dc47a2b',
      title: 'Canal View Prinsengracht',
      type: 'hotel',
      price: 308,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.397540000000006,
        longitude: 4.9099759999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.4
    },
    {
      id: 'cd317f28-8aca-4e2d-9c6e-8255a03b5fb8',
      title: 'Wood and stone place',
      type: 'room',
      price: 263,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.37454,
        longitude: 4.881976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.9
    },
    {
      id: 'ce665591-b7c8-4211-8344-d0c3ef46e2db',
      title: 'The Joshua Tree House',
      type: 'hotel',
      price: 135,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.367540000000005,
        longitude: 4.883976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.5
    },
    {
      id: '87b6e3b1-b8f3-4a71-af54-ea2336fa4b12',
      title: 'Tile House',
      type: 'hotel',
      price: 498,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.361540000000005,
        longitude: 4.883976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.3
    },
    {
      id: 'b4722966-d304-42b5-8f8f-7187e9894edc',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'apartment',
      price: 401,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.35754,
        longitude: 4.9179759999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.3
    },
    {
      id: 'c1ea44ac-f004-47c7-87bf-9716e24e0c63',
      title: 'Canal View Prinsengracht',
      type: 'hotel',
      price: 442,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.37854,
        longitude: 4.894976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.8
    },
    {
      id: '875ba9fd-02f3-4fc9-abc8-2e8ae5ad8f2a',
      title: 'Amazing and Extremely Central Flat',
      type: 'apartment',
      price: 460,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.36854,
        longitude: 4.887976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.6
    },
    {
      id: 'cd5b8dd2-9653-483c-9382-6603f49ff57b',
      title: 'The house among olive ',
      type: 'hotel',
      price: 347,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.370540000000005,
        longitude: 4.9099759999999995,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.5
    },
    {
      id: '0ff06463-c4f6-46ef-b743-9dfe8b7191ee',
      title: 'Loft Studio in the Central Area',
      type: 'apartment',
      price: 384,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.389540000000004,
        longitude: 4.883976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.6
    },
    {
      id: '7b4d8cd0-a793-4a45-a28a-5a512971f86a',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'room',
      price: 256,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.35054,
        longitude: 4.908976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.1
    },
    {
      id: 'd792fd07-53fe-4842-83b6-5f140e6d5f6b',
      title: 'Loft Studio in the Central Area',
      type: 'house',
      price: 314,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.37154,
        longitude: 4.889976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.3
    },
    {
      id: '0e2cf502-3056-4993-8c0f-68914ef497e8',
      title: 'Tile House',
      type: 'house',
      price: 110,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.364540000000005,
        longitude: 4.9019759999999994,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.9
    },
    {
      id: 'e9366d7b-cdd4-4b41-9f92-986f546ee0da',
      title: 'Wood and stone place',
      type: 'room',
      price: 265,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.36354,
        longitude: 4.911976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.9
    },
    {
      id: 'bfa08490-8c1b-42c2-9526-9c46b78e1e5e',
      title: 'The Pondhouse - A Magical Place',
      type: 'house',
      price: 194,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.36354,
        longitude: 4.889976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.3
    },
    {
      id: '16975660-d567-4de7-b49c-2500dcaa039b',
      title: 'Tile House',
      type: 'hotel',
      price: 485,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.388540000000006,
        longitude: 4.899976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.9
    },
    {
      id: 'e951cd76-23f3-4f32-8df1-a8f030f32bd5',
      title: 'The Joshua Tree House',
      type: 'apartment',
      price: 176,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.36954,
        longitude: 4.914976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.6
    },
    {
      id: 'be061c5f-2b29-40e4-8fcf-8495f9a05b4f',
      title: 'Loft Studio in the Central Area',
      type: 'house',
      price: 404,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.37554,
        longitude: 4.9019759999999994,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.8
    },
    {
      id: '8b751a35-6df9-4798-a529-65371ad24a7e',
      title: 'Wood and stone place',
      type: 'room',
      price: 120,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.385540000000006,
        longitude: 4.886976,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.6
    },
    {
      id: 'ad4987e6-19d6-4f3d-8632-37a172a10d07',
      title: 'House in countryside',
      type: 'apartment',
      price: 182,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.528341000000005,
        longitude: 10.018654000000002,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.1
    },
    {
      id: 'f5a127fe-25f9-41b4-888c-b72d2ce6502f',
      title: 'Tile House',
      type: 'house',
      price: 771,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.538341,
        longitude: 9.976654000000002,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.1
    },
    {
      id: 'ae5aa509-e6fb-4db2-bc6e-5594f17c799c',
      title: 'House in countryside',
      type: 'house',
      price: 553,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.563341,
        longitude: 10.019654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.6
    },
    {
      id: 'e2805dc0-5aaa-4491-881b-c2b37563c81c',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'hotel',
      price: 425,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.529341,
        longitude: 9.975654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.1
    },
    {
      id: 'b39d9b9b-f337-4b6d-a971-c09437cdaa21',
      title: 'Loft Studio in the Central Area',
      type: 'house',
      price: 514,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.565341,
        longitude: 9.980654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.1
    },
    {
      id: '3e177b20-b8e2-4732-9e6d-288281f91513',
      title: 'Loft Studio in the Central Area',
      type: 'hotel',
      price: 442,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.546341000000005,
        longitude: 10.022654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.7
    },
    {
      id: 'be383d4b-4323-4fde-b4ce-7ebb638e189d',
      title: 'House in countryside',
      type: 'apartment',
      price: 416,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.565341000000004,
        longitude: 9.978654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.6
    },
    {
      id: 'a592b591-7698-4c70-8ee4-a79190403826',
      title: 'Tile House',
      type: 'room',
      price: 198,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.570341000000006,
        longitude: 9.975654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.6
    },
    {
      id: '7ed2b9e4-dab5-4a6d-9f7b-96dcaad09430',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'house',
      price: 136,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.558341000000006,
        longitude: 10.001654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.1
    },
    {
      id: '0715855b-d2e0-4375-87d9-75d6723ff1f6',
      title: 'Amazing and Extremely Central Flat',
      type: 'apartment',
      price: 103,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.573341000000006,
        longitude: 10.009654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.7
    },
    {
      id: 'be03b0d3-1036-4529-a7f2-d57c6f276da9',
      title: 'Loft Studio in the Central Area',
      type: 'apartment',
      price: 294,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.573341000000006,
        longitude: 9.994654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.1
    },
    {
      id: '6dffaac5-a8b5-42f0-994f-4e2bf534ae6f',
      title: 'Perfectly located Castro',
      type: 'house',
      price: 837,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.528341000000005,
        longitude: 9.982654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.7
    },
    {
      id: '5ee2e36e-524c-4b74-b7d4-b8df9a3132bb',
      title: 'Loft Studio in the Central Area',
      type: 'apartment',
      price: 433,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.540341000000005,
        longitude: 10.025654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.1
    },
    {
      id: '3dc318e5-6a86-4b6e-a1e2-3f854b2dee39',
      title: 'Canal View Prinsengracht',
      type: 'house',
      price: 693,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.555341000000006,
        longitude: 9.975654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.1
    },
    {
      id: '6fd38965-d49f-4924-9107-4334ac289eec',
      title: 'Canal View Prinsengracht',
      type: 'house',
      price: 773,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.534341000000005,
        longitude: 9.998654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.4
    },
    {
      id: 'eb6db36e-6269-410e-a9b6-f53c427db2d2',
      title: 'Tile House',
      type: 'room',
      price: 171,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.563341,
        longitude: 9.975654,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.7
    },
    {
      id: '56cfc80e-4006-4881-939f-a1abfe973c71',
      title: 'The Joshua Tree House',
      type: 'apartment',
      price: 177,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.574341000000004,
        longitude: 10.022654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.1
    },
    {
      id: '97c5dd43-5f37-4b73-bfe0-8eaeed3c29e5',
      title: 'Perfectly located Castro',
      type: 'room',
      price: 131,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.573341000000006,
        longitude: 10.025654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.7
    },
    {
      id: '8b7ea473-03e6-464f-820d-df35de2742d3',
      title: 'House in countryside',
      type: 'apartment',
      price: 232,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.550341,
        longitude: 9.980654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.6
    },
    {
      id: '3113c4a9-0e6c-4c3e-ba23-7364a2be5b63',
      title: 'The Joshua Tree House',
      type: 'hotel',
      price: 230,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Hamburg',
        location: {
          latitude: 53.550341,
          longitude: 10.000654,
          zoom: 13
        }
      },
      location: {
        latitude: 53.558341000000006,
        longitude: 9.999654000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.7
    },
    {
      id: '83acd6f9-d0d4-44bd-b529-c138f837642e',
      title: 'Tile House',
      type: 'hotel',
      price: 123,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.236402000000005,
        longitude: 6.784314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.7
    },
    {
      id: 'f787b35f-fa4a-4271-b47e-396b10eca514',
      title: 'The house among olive ',
      type: 'house',
      price: 858,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.210402,
        longitude: 6.798314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.8
    },
    {
      id: '8e014bc7-16bb-4d41-add1-51b31f429e00',
      title: 'Perfectly located Castro',
      type: 'house',
      price: 536,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.211402,
        longitude: 6.756314000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.6
    },
    {
      id: '83338c8a-5672-4423-9fa2-54b8106cc930',
      title: 'Waterfront with extraordinary view',
      type: 'hotel',
      price: 417,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.228402,
        longitude: 6.784314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.7
    },
    {
      id: '02c60a14-66e6-4298-8e90-ec37093177f6',
      title: 'The Pondhouse - A Magical Place',
      type: 'house',
      price: 643,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.204402,
        longitude: 6.7773140000000005,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 4
    },
    {
      id: '5c4790f4-d466-4e92-9167-1131e45ef6d4',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'hotel',
      price: 134,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.217402,
        longitude: 6.7693140000000005,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.7
    },
    {
      id: '63bef2ab-e4b4-45ff-8761-c67c5cf877f0',
      title: 'Amazing and Extremely Central Flat',
      type: 'apartment',
      price: 349,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.241402,
        longitude: 6.782314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.1
    },
    {
      id: 'cdece0a4-8f39-43ca-89ad-8fa01b8b124e',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'apartment',
      price: 250,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.235402,
        longitude: 6.800314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3
    },
    {
      id: 'a6ca0609-4071-4670-a5ed-285dc25e2cde',
      title: 'Perfectly located Castro',
      type: 'apartment',
      price: 167,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.237402,
        longitude: 6.779314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.3
    },
    {
      id: 'dd697f64-a94a-49f5-a70d-4c9ca80b9506',
      title: 'The Joshua Tree House',
      type: 'hotel',
      price: 209,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.237402,
        longitude: 6.797314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.7
    },
    {
      id: 'fd237a71-3f62-4abc-8326-094517e43588',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'hotel',
      price: 226,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.222402,
        longitude: 6.786314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.8
    },
    {
      id: 'c1b63afa-dc30-4aed-a25b-466325654b5a',
      title: 'Beautiful & luxurious apartment at great location',
      type: 'hotel',
      price: 300,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.232402,
        longitude: 6.800314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.4
    },
    {
      id: '1c1b0c49-431f-4704-8a4b-9562e78766c2',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'apartment',
      price: 139,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.216402,
        longitude: 6.758314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 3.9
    },
    {
      id: '5afb2755-c042-47cb-a88d-068519893ab5',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'apartment',
      price: 310,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.205402,
        longitude: 6.7613140000000005,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.5
    },
    {
      id: '6153797a-5835-47f1-91f5-d5004445b0fb',
      title: 'The Joshua Tree House',
      type: 'room',
      price: 149,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.248402000000006,
        longitude: 6.763314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 2.3
    },
    {
      id: '5037b2e8-c718-4451-b19a-1560050226fd',
      title: 'House in countryside',
      type: 'hotel',
      price: 187,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.250402,
        longitude: 6.7853140000000005,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.8
    },
    {
      id: 'd5d28c1f-f02a-4443-90e4-9fb3aa27830f',
      title: 'Amazing and Extremely Central Flat',
      type: 'apartment',
      price: 466,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.239402000000005,
        longitude: 6.756314000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.1
    },
    {
      id: 'bb676c21-9256-42d6-a1ef-0e0cb3d28fcc',
      title: 'Wood and stone place',
      type: 'hotel',
      price: 267,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.243402,
        longitude: 6.791314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.3
    },
    {
      id: 'b234b4c3-e604-42e3-84ab-90b639b6d22a',
      title: 'Loft Studio in the Central Area',
      type: 'apartment',
      price: 168,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.214402,
        longitude: 6.764314000000001,
        zoom: 16
      },
      isFavorite: false,
      isPremium: true,
      rating: 1.5
    },
    {
      id: '8e68dc4d-b4ea-4e25-ae95-9f32ba58d135',
      title: 'Wood and stone place',
      type: 'hotel',
      price: 101,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      city: {
        name: 'Dusseldorf',
        location: {
          latitude: 51.225402,
          longitude: 6.776314,
          zoom: 13
        }
      },
      location: {
        latitude: 51.225402,
        longitude: 6.784314,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.8
    }
  ];

export { mockOffers };
