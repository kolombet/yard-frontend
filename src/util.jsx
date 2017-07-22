// @flowtype

export const getImageUrl = (imageID: number, height: string): string =>
  `https://s3-eu-central-1.amazonaws.com/yard-images/${imageID}-${height}`;

export const formatMillion = (value: number): number => +(value / 1000000).toFixed(2);
