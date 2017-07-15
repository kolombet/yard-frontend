const API_URL = 'https://yard.moscow/api/v1/';

export default function get(resource) {
  return fetch(encodeURI(API_URL + resource)).then(res => res.json());
}
