import React from 'react';

import EmptyIllustURL from 'src/assets/images/empty_illust.jpg';
import AutoFitImage from 'src/components/AutoFitImage/AutoFitImage';
import Typo from 'src/components/Typo/Typo';
import { FontType } from 'src/utils/font';
import { NoneDataStyled } from './NoneData.styles';

interface Props {
  text: string;
}

const NoneData = ({ text }: Props) => {
  return (
    <NoneDataStyled>
      <AutoFitImage source={EmptyIllustURL} />
      <Typo type={FontType.REGULAR_14}>{text}</Typo>
    </NoneDataStyled>
  );
};

export default NoneData;
