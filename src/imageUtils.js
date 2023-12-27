export function getImageUrl(imageData) {
  if (!imageData) {
    return '';
  }

  // If the data is already a string, return it as is
  if (typeof imageData === 'string') {
    return imageData;
  }

  // Check if the data is an object with a 'data' property (assuming it's a Buffer)
  if (imageData && imageData.data) {
    try {
      const bytes = new Uint8Array(imageData.data);
      const blob = new Blob([bytes], { type: 'image/jpeg' });
      const dataUrl = URL.createObjectURL(blob);
      console.log('DataUrl:', dataUrl);
      return dataUrl;
    } catch (error) {
      console.error('Error creating image URL:', error);
      return '';
    }
  }

  console.error('Unsupported image data format:', imageData);
  return '';
}