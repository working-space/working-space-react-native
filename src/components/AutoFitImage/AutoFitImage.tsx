import React from 'react';
import { Dimensions, ImageProps } from 'react-native';

import { Image } from './AutoFitImage.styles';

type Props = ImageProps;

const AutoFitImage = (props: Props) => {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width);

  return <Image {...props} height={imageHeight} resizeMode="contain" />;
};

export default AutoFitImage;
