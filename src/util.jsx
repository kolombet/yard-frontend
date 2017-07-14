import {
  constructionKinds,
  securityKinds,
  kinds,
  furnitureKinds,
  conditions,
  saleKinds,
  renovateKinds,
} from './complexes-dictionaries';
import Complexes from './DummyData/Complexes.json';

const CARD_AMAZON_URL = 'https://s3-eu-central-1.amazonaws.com/yard-images/';
const CARD_PLACEHOLDER = 'http://via.placeholder.com/500x350';

export const getExternalImageUrl = image => (image ? CARD_AMAZON_URL + image.id : CARD_PLACEHOLDER);

const API_URL = 'https://yard.moscow/api/v1/';

export const getApi = resource => fetch(API_URL + resource).then(res => res.json());
export const isLocalMode = false;
export const getComplexes = () => {
  if (!isLocalMode) return getApi('complexes');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Complexes);
    }, 100);
  });
};
export const getComplex = (id) => {
  if (!isLocalMode) return getApi(`complexes/${id}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Complexes.items[id]);
    }, 100);
  });
};
export const isDraft = state => state === 'draft';

export const formatMillion = number => Math.round(number / 1000000);

export const getSecurity = type => securityKinds[type] || '';
export const getConstruction = type => constructionKinds[type] || '';
export const getKind = type => kinds[type] || '';
export const getFurniture = type => furnitureKinds[type] || '';
export const getCondition = type => conditions[type] || '';
export const getSaleOfferKind = type => saleKinds[type] || '';
export const getRenovate = type => renovateKinds[type] || '';

export const getPhotoLocale = (count) => {
  if (count <= 1) {
    return `${count} фотография`;
  }
  if (count > 1 && count <= 4) {
    return `${count} фотографии`;
  }
  return `${count} фотографий`;
};
