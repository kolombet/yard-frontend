export const getExternalImageUrl = image =>
  (image
    ? `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}`
    : 'http://via.placeholder.com/500x350');
