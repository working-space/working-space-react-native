import React from 'react';

import PhotoWhiteIcon from 'src/assets/icons/icon_photo_white.svg';
import Typo from 'src/components/Typo/Typo';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import { NoneImageWrapper } from './NoneImage.styles';

const NoneImage = () => {
  return (
    <NoneImageWrapper>
      <PhotoWhiteIcon />
      <Typo type={FontType.REGULAR_12} color={GrayColor.GRAY_0}>
        불러올 수 있는 이미지가 없습니다.
      </Typo>
    </NoneImageWrapper>
  );
};

export default NoneImage;
