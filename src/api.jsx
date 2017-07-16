/* eslint import/prefer-default-export: 0*/
// TODO: remove when more exports added

const API_URL = 'https://yard.moscow/api/v1/';

export function get(resource) {
  return fetch(encodeURI(API_URL + resource)).then(res => res.json());
}
