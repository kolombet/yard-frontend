export type AreaType = {
  min: number,
  max: number,
};

export type PriceType = {
  min: number,
  max: number,
};

export type OfferType = {
  rooms: number,
  area: AreaType,
  price: PriceType,
};

export type GalleryImageType = {
  id: string,
  isPublic: boolean,
};

export type ImageType = {
  id: string,
  width: number,
  height: number,
  isPublic: boolean,
};

export type LocationType = {
  subLocalityName: string,
  street: string,
  house: number,
};

export type AmenityType = {
  id: number,
  name: string,
};

export type ComplexType = {
  id: number,
  name: string,
  location: Location,
  images: ?Array<GalleryImage>,
  image: ?Image,
  state: ?string,
  slug: ?string,
  shortDescription: ?string,
  fullDescription: ?string,
  details: {
    architect: ?string,
    developer: ?string,
  },
  amenities: Array<Amenity>,
  units: number,
};
