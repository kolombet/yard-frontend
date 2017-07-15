export const getImageUrl = (imageID, height) =>
  `https://s3-eu-central-1.amazonaws.com/yard-images/${imageID}-${height}`;

export const isDraft = state => state === 'draft';

export const formatMillion = number => +(number / 1000000).toFixed(2);
