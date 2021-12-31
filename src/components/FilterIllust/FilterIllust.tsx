import React from 'react';
import { View } from 'react-native';

import FILTER from 'src/constants/filter';
import { HeaderText } from './FilterIllust.styles';

interface Props {
  filter: keyof typeof FILTER;
}

const FilterIllust = ({ filter }: Props) => {
  return (
    <View>
      <HeaderText>
        현위치에서{'\n'}
        가장 {FILTER[filter].name} 곳
      </HeaderText>
      {FILTER[filter].imageURL}
    </View>
  );
};

export default FilterIllust;
