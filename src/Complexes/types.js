// @flow

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

export type ComplexDetailsType = {
  architect: ?string,
  developer: ?string,
  security: string,
  constructionKind: string,
  ceilHeight: {
    from: number,
    to: number,
  },
  maintenanceCosts: ?string,
  startYear: string,
  startQuarter: string,
  commissioningYear: string,
  commissioningQuarter: string,
};

export type ComplexStatisticsType = {
  propertiesCount: number,
  price: {
    from: {
      rub: number,
    },
    to: {
      rub: number,
    },
  },
  totalArea: {
    from: number,
    to: number,
  },
};

export type ComplexPropertyDefaultsType = {
  information: PropertyDefaultInformationType,
};

export type PropertyDefaultInformationType = {
  furniture: string,
  condition: string,
  renovate: string,
};

export type ComplexType = {
  id: number,
  name: string,
  slug: ?string,
  images: ?Array<GalleryImageType>,
  fullDescription: ?string,
  location: LocationType,
  image: ?ImageType,
  state: ?string,
  shortDescription: ?string,
  details: ComplexDetailsType,
  statistics: ComplexStatisticsType,
  amenities: Array<AmenityType>,
  propertyDefaults: ComplexPropertyDefaultsType,
  units: number,
};
