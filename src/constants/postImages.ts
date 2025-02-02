const generalUseSmall = import.meta.glob<{ default: ImageMetadata }>('/src/assets/small/generaluse/*.webp');
const generalUseMedium = import.meta.glob<{ default: ImageMetadata }>('/src/assets/medium/generaluse/*.webp');
const generalUseLarge = import.meta.glob<{ default: ImageMetadata }>('/src/assets/large/generaluse/*.webp');

const petFoodSmall = import.meta.glob<{ default: ImageMetadata }>('/src/assets/small/petfood/*.webp');
const petFoodMedium = import.meta.glob<{ default: ImageMetadata }>('/src/assets/medium/petfood/*.webp');
const petFoodLarge = import.meta.glob<{ default: ImageMetadata }>('/src/assets/large/petfood/*.webp');

const petHealthSmall = import.meta.glob<{ default: ImageMetadata }>('/src/assets/small/pethealth/*.webp');
const petHealthMedium = import.meta.glob<{ default: ImageMetadata }>('/src/assets/medium/pethealth/*.webp');
const petHealthLarge = import.meta.glob<{ default: ImageMetadata }>('/src/assets/large/pethealth/*.webp');

const trainingTipsSmall = import.meta.glob<{ default: ImageMetadata }>('/src/assets/small/trainingtips/*.webp');
const trainingTipsMedium = import.meta.glob<{ default: ImageMetadata }>('/src/assets/medium/trainingtips/*.webp');
const trainingTipsLarge = import.meta.glob<{ default: ImageMetadata }>('/src/assets/large/trainingtips/*.webp');

const generalUseImages = {
  small: Object.values(generalUseSmall).map(func => func()),
  medium: Object.values(generalUseMedium).map(func => func()),
  large: Object.values(generalUseLarge).map(func => func()),
};

const petFoodImages = {
  small: Object.values(petFoodSmall).map(func => func()),
  medium: Object.values(petFoodMedium).map(func => func()),
  large: Object.values(petFoodLarge).map(func => func()),
};

const petHealthImages = {
  small: Object.values(petHealthSmall).map(func => func()),
  medium: Object.values(petHealthMedium).map(func => func()),
  large: Object.values(petHealthLarge).map(func => func()),
};

const trainingTipsImages = {
  small: Object.values(trainingTipsSmall).map(func => func()),
  medium: Object.values(trainingTipsMedium).map(func => func()),
  large: Object.values(trainingTipsLarge).map(func => func()),
};

const tagImageMap: Record<string, Record<string, Promise<{ default: ImageMetadata }>[]> > = {
  "Store News": generalUseImages,
  "Training Tips": trainingTipsImages,
  "Pet Health": petHealthImages,
  "Pet Food": petFoodImages,
};

export const getImagesForTag = async (tag: string, size: "small" | "medium" | "large") => {
  const images = tagImageMap[tag]?.[size] || generalUseImages[size];

  if (images && images.length > 0) {
    const imageSelection = await images[Math.floor(Math.random() * images.length)];
    return imageSelection.default.src;
  }

  return null;
};

export default getImagesForTag;