/* eslint import/prefer-default-export: 0*/
// TODO: remove when more exports added

// @flow

const baseUrl: string = 'https://yard.moscow/api/v1/';

export function get(resource: string): Promise<any> {
  return fetch(baseUrl + resource).then(res => res.json());
}
