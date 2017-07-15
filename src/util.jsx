export const getExternalImageUrl = (imageID, height) =>
  `https://s3-eu-central-1.amazonaws.com/yard-images/${imageID}-${height}`;

export const isDraft = state => state === 'draft';

export const formatMillion = number => (+number.toFixed(2) / 1000000, 2);

export const getPhotoLocale = (count) => {
  if (count <= 1) {
    return `${count} фотография`;
  }
  if (count > 1 && count <= 4) {
    return `${count} фотографии`;
  }
  return `${count} фотографий`;
};
