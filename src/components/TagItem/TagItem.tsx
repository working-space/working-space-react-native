import React, { useCallback } from 'react';

import SmallCheckIcon from 'src/assets/icons/icon_small_check.svg';
import Typo from 'src/components/Typo/Typo';
import TAG from 'src/constants/tag';
import { Tag } from 'src/models/tag';
import { GrayColor } from 'src/utils/color';
import { Align, FontType } from 'src/utils/font';
import { Item, ItemTagIcon, ItemcheckIcon, ItemTagName } from './TagItem.styles';

interface Props {
  tag: Tag;
  showCount: boolean;
  selected: boolean;
  onClick?: (tag: Tag) => void;
}

const TagItem = ({ tag, showCount, selected, onClick }: Props) => {
  const handleClick = useCallback(() => {
    onClick?.(tag);
  }, [tag, onClick]);

  return (
    <Item onPress={handleClick}>
      <ItemTagIcon selected={selected}>
        {showCount ? (
          <ItemcheckIcon selected={selected} showCount={showCount}>
            <Typo type={FontType.REGULAR_CAPTION} color={GrayColor.GRAY_0} align={Align.CENTER}>
              {tag.count}
            </Typo>
          </ItemcheckIcon>
        ) : (
          selected && (
            <ItemcheckIcon selected={selected} showCount={showCount}>
              <SmallCheckIcon />
            </ItemcheckIcon>
          )
        )}
        {TAG[tag.id].icon}
      </ItemTagIcon>
      <Typo
        type={!showCount && selected ? FontType.BOLD_BODY_02 : FontType.REGULAR_BODY_02}
        color={showCount || selected ? GrayColor.GRAY_400 : GrayColor.GRAY_300}
        align={Align.CENTER}
        style={ItemTagName}
      >
        {TAG[tag.id].name}
      </Typo>
    </Item>
  );
};

export default TagItem;
