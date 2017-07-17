/* eslint import/prefer-default-export: 0*/
// TODO: remove when more exports added

const baseUrl = 'https://yard.moscow/api/v1/';

export function get(resource) {
  return fetch(baseUrl + resource).then(res => res.json());
}
