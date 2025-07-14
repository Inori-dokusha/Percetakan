export const typography = function pxToRem(pixelValues, baseFont = 16) {
  const rem = pixelValues / baseFont;
  return rem;
};
