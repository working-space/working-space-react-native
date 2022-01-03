import React from 'react';
import { Dimensions, ImageProps } from 'react-native';

import { AutoFitImageStyled } from './AutoFitImage.styles';

type Props = ImageProps;

const AutoFitImage = (props: Props) => {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width);

  return <AutoFitImageStyled {...props} height={imageHeight} resizeMode="contain" />;
};

export default AutoFitImage;
