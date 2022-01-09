import React from 'react';
import { ActivityIndicator } from 'react-native';

import { GrayColor, PrimaryColor, SecondColor, SubColor } from 'src/utils/color';
import { LoadingView } from './Loading.styles';

interface Props {
  color?: GrayColor | PrimaryColor | SecondColor | SubColor;
}

const LoadingBar = ({ color = PrimaryColor.PRIMARY_500, ...props }: Props) => {
  return (
    <LoadingView {...props}>
      <ActivityIndicator size="large" color={color} />
    </LoadingView>
  );
};

export default LoadingBar;
