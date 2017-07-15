const API_URL = 'https://yard.moscow/api/v1/';
export const get = resource => fetch(API_URL + resource).then(res => res.json());
export const getComplexes = () => get('complexes');
export const getComplex = id => get(`complexes/${id}`);
