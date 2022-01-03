import React from 'react';
import { View } from 'react-native';

import Typo from 'src/components/Typo/Typo';
import FILTER from 'src/constants/filter';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import { headerTextStyle } from './FilterIllust.styles';

interface Props {
  filter: keyof typeof FILTER;
}

const FilterIllust = ({ filter }: Props) => {
  return (
    <View>
      <Typo type={FontType.BOLD_HEAD} color={GrayColor.GRAY_400} style={headerTextStyle}>
        현위치에서{'\n'}
        가장 {FILTER[filter].name} 곳
      </Typo>
      {FILTER[filter].imageURL}
    </View>
  );
};

export default FilterIllust;
