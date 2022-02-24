import React, { useCallback } from 'react';

import CheckWhiteIcon from 'src/assets/icons/icon_check_white.svg';
import Typo from 'src/components/Typo/Typo';
import TAG from 'src/constants/tag';
import { Tag } from 'src/models/tag';
import { GrayColor } from 'src/utils/color';
import { Align, FontType } from 'src/utils/font';
import { Item, ItemTagIcon, ItemcheckIcon, itemTagNameStyle } from './TagItem.styles';

interface Props {
  tag: Tag;
  showCount: boolean;
  selected: boolean;
  onPress?: (tag: Tag) => void;
}

const TagItem = ({ tag, showCount, selected, onPress }: Props) => {
  const handleItemPress = useCallback(() => {
    onPress?.(tag);
  }, [tag, onPress]);

  return (
    <Item onPress={handleItemPress}>
      <ItemTagIcon selected={selected}>
        {showCount ? (
          <ItemcheckIcon selected={selected} showCount={showCount}>
            <Typo type={FontType.REGULAR_11} color={GrayColor.GRAY_0} align={Align.CENTER}>
              {tag.count}
            </Typo>
          </ItemcheckIcon>
        ) : (
          selected && (
            <ItemcheckIcon selected={selected} showCount={showCount}>
              <CheckWhiteIcon />
            </ItemcheckIcon>
          )
        )}
        {TAG[tag.id].icon}
      </ItemTagIcon>
      <Typo
        type={!showCount && selected ? FontType.BOLD_12 : FontType.REGULAR_12}
        color={showCount || selected ? GrayColor.GRAY_400 : GrayColor.GRAY_300}
        align={Align.CENTER}
        style={itemTagNameStyle}
      >
        {TAG[tag.id].name}
      </Typo>
    </Item>
  );
};

export default TagItem;
