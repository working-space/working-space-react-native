declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.jpg' {
  import { ImageSourcePropType } from 'react-native';

  const content: ImageSourcePropType;
  export default content;
}