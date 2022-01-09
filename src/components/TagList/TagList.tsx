import React, { useCallback } from 'react';

import SmallPersonFillIcon from 'src/assets/icons/icon_small_person_fill.svg';
import NoneImage from 'src/assets/images/none-image.svg';
import TagItem from 'src/components/TagItem/TagItem';
import Typo from 'src/components/Typo/Typo';
import { Tag } from 'src/models/tag';
import { GrayColor, SecondColor } from 'src/utils/color';
import { Align, FontType } from 'src/utils/font';
import {
  TagListWrapper,
  TagListBox,
  TagListBoxIcon,
  TagListBoxHeader,
  TagListBoxLeft,
  TagListSubmitButton,
  TagListBoxAllTags,
  NoneItem,
} from './TagList.styles';

interface Props {
  tags: Tag[];
  preferTags: Tag[];
  onSetTagsModal?: () => void;
}

const TagList = ({ tags, preferTags = [], onSetTagsModal }: Props) => {
  const handleSetTagsModal = useCallback(() => {
    onSetTagsModal?.();
  }, [onSetTagsModal]);

  return (
    <TagListWrapper>
      <TagListBox>
        <TagListBoxHeader>
          <TagListBoxLeft>
            <Typo type={FontType.BOLD_TITLE_02}>태그</Typo>
            <TagListBoxIcon>
              <SmallPersonFillIcon />
            </TagListBoxIcon>
            <Typo type={FontType.REGULAR_BODY_01} color={GrayColor.GRAY_200}>
              {tags.length ?? 0}
            </Typo>
          </TagListBoxLeft>
          <TagListSubmitButton onPress={handleSetTagsModal}>
            <Typo type={FontType.BOLD_BODY_01} color={SecondColor.SECOND_500}>
              평가하기
            </Typo>
          </TagListSubmitButton>
        </TagListBoxHeader>
        {tags.length > 0 ? (
          <TagListBoxAllTags horizontal={true} showsHorizontalScrollIndicator={true}>
            {tags.map((tag, index) => {
              return <TagItem key={index} showCount={true} tag={tag} selected={preferTags.includes(tag)} />;
            })}
          </TagListBoxAllTags>
        ) : (
          <NoneItem>
            <NoneImage />
            <Typo type={FontType.REGULAR_BODY_01} color={GrayColor.GRAY_200} align={Align.CENTER}>
              첫 태그를 남겨보세요!
            </Typo>
          </NoneItem>
        )}
      </TagListBox>
    </TagListWrapper>
  );
};

export default TagList;
