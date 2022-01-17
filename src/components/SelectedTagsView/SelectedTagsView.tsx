import React from 'react';

import CloseGrayIcon from 'src/assets/icons/icon_close_gray.svg';
import SetTags from 'src/components/SetTags/SetTags';
import Typo from 'src/components/Typo/Typo';
import { Tag, TagName } from 'src/models/tag';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  SelectedTagsViewStyled,
  SelectedTagsViewHeader,
  SelectedTagsViewTop,
  SelectedTagsViewCloseButton,
  SelectedTagsViewSubmitButton,
} from './SelectedTagsView.styles';

interface Props {
  selectedTags: TagName[];
  preferredTags: TagName[];
  onToggleTag: (tag: Tag) => void;
  onCloseButton: () => void;
  onSubmitButton: () => void;
}

const SelectedTagsView = ({ selectedTags, preferredTags, onToggleTag, onCloseButton, onSubmitButton }: Props) => {
  return (
    <SelectedTagsViewStyled>
      <SelectedTagsViewHeader>
        <SelectedTagsViewTop>
          <SelectedTagsViewCloseButton onPress={onCloseButton}>
            <CloseGrayIcon />
          </SelectedTagsViewCloseButton>
        </SelectedTagsViewTop>
        <Typo type={FontType.BOLD_18}>작업공간으로{'\n'}적절한 태그를 선택해주세요!</Typo>
      </SelectedTagsViewHeader>
      <SetTags preferTags={selectedTags} onToggleTag={onToggleTag} />
      <SelectedTagsViewSubmitButton
        onPress={onSubmitButton}
        selected={preferredTags.length > 0 || selectedTags.length > 0}
      >
        <Typo type={FontType.BOLD_14} color={GrayColor.GRAY_0}>
          {preferredTags.length > 0 || selectedTags.length > 0
            ? `태그 ${selectedTags ? selectedTags.length : preferredTags.length}개 선택! 평가 등록하기`
            : '태그가 선택되지 않았어요.'}
        </Typo>
      </SelectedTagsViewSubmitButton>
    </SelectedTagsViewStyled>
  );
};

export default SelectedTagsView;
