const API_URL = 'https://yard.moscow/api/v1/';

export const FILTER_PUBLIC = encodeURI('?filter[state]=public');

export const getApi = (resource, filter = '') =>
  fetch(API_URL + resource + filter).then(res => res.json());
