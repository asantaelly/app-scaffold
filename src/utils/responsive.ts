import { Dimensions, PixelRatio } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const baseWidth = 375;
const baseHeight = 812;

/**
 *  @param offset
 */
const percentageWidthWithOffset = (
  width: number,
  offset: number = 0
): number => {
  return PixelRatio.roundToNearestPixel((screenWidth * width) / 100 - offset);
};

const percentageWidth = (width: number): number => {
  return PixelRatio.roundToNearestPixel((screenWidth * width) / 100);
};

const percentageHeight = (height: number): number => {
  return PixelRatio.roundToNearestPixel((screenHeight * height) / 100);
};

const responsiveWidth = (width: number): number => {
  return (screenWidth / baseWidth) * width;
};

const responsiveHeight = (height: number): number => {
  return (screenHeight / baseHeight) * height;
};

const responsiveFonts = (size: number, factor = 0.5): number => {
  const scale = (screenWidth / baseWidth) * size;
  return size + (scale - size) * factor;
};

export {
  responsiveWidth,
  responsiveHeight,
  responsiveFonts,
  percentageWidth,
  percentageHeight,
  percentageWidthWithOffset,
};
