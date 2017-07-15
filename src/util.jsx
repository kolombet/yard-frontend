import {
  constructionKinds,
  securityKinds,
  kinds,
  furnitureKinds,
  conditions,
  saleKinds,
  renovateKinds,
  quarters,
} from './complexes-dictionaries';
import Complexes from './DummyData/Complexes.json';

export const getExternalImageUrl = (imageID, height) =>
  `https://s3-eu-central-1.amazonaws.com/yard-images/${imageID}-${height}`;

export const isDraft = state => state === 'draft';

export const formatMillion = number => (+number.toFixed(2) / 1000000, 2);

export const getSecurity = type => securityKinds[type] || '';
export const getConstruction = type => constructionKinds[type] || '';
export const getKind = type => kinds[type] || '';
export const getFurniture = type => furnitureKinds[type] || '';
export const getCondition = type => conditions[type] || '';
export const getSaleOfferKind = type => saleKinds[type] || '';
export const getRenovate = type => renovateKinds[type] || '';
export const getQuarter = index => quarters[index] || '';

export const getPhotoLocale = (count) => {
  if (count <= 1) {
    return `${count} фотография`;
  }
  if (count > 1 && count <= 4) {
    return `${count} фотографии`;
  }
  return `${count} фотографий`;
};
