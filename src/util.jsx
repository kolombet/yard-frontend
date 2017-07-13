const CARD_AMAZON_URL = 'https://s3-eu-central-1.amazonaws.com/yard-images/';
const CARD_PLACEHOLDER = 'http://via.placeholder.com/500x350';

export const getExternalImageUrl = image => (image ? CARD_AMAZON_URL + image.id : CARD_PLACEHOLDER);

const API_URL = 'https://yard.moscow/api/v1/';

export const getApi = resource => fetch(API_URL + resource).then(res => res.json());
export const getComplexes = () => getApi('complexes');
export const getComplex = id => getApi(`complexes/${id}`);

export const isDraft = state => state === 'draft';

export const formatMillion = number => Math.floor(number / 1000000);

const securityByType = {
  guarded: 'охраняется',
};

const constructionByType = {
  monolith: 'монолит',
  brick_monolithic: 'кирпич',
};

export const getSecurity = type => securityByType[type] || '';
export const getConstruction = type => constructionByType[type] || '';