// @flow

type Area = {
  min: number,
  max: number,
};

type Price = {
  min: number,
  max: number,
};

type Offer = {
  id: string,
  rooms: number,
  area: Area,
  price: Price,
};

type Image = {
  id: string,
  width: number,
  height: number,
  isPublic: boolean,
};

type Location = {
  subLocalityName: string,
  street: string,
  house: number,
};

type Amenity = {
  id: number,
  name: string,
};

type ComplexDetails = {
  architect: string,
  developer: string,
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

type ComplexStatistics = {
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

type PropertyDefaultInformation = {
  furniture: string,
  condition: string,
  renovate: string,
};

type ComplexPropertyDefaults = {
  information: PropertyDefaultInformation,
};

type Complex = {
  id: number,
  name: string,
  slug: string,
  images: Array<Image>,
  image: Image,
  details: ComplexDetails,
  note: string,
  location: Location,
  statistics: ComplexStatistics,
  propertyDefaults: ComplexPropertyDefaults,
  fullDescription: string,
  state: ?string,
  shortDescription: ?string,
  amenities: Array<Amenity>,
  units: number,
};

export type { Complex, Image, Amenity, Offer };
