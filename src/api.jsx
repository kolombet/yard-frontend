const API_URL = 'https://yard.moscow/api/v1/';
const FILTER_PUBLIC = encodeURI('?filter[state]=public');
export const get = (resource, filter = '') =>
  fetch(API_URL + resource + filter).then(res => res.json());
export const getComplexes = () => get('complexes', FILTER_PUBLIC);
export const getComplex = id => get(`complexes/${id}`);
