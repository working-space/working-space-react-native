import React, { memo } from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';

import CommentIcon from 'src/assets/icons/icon_comment.svg';
import EditGrayIcon from 'src/assets/icons/icon_edit_gray.svg';
import FavoriteIcon from 'src/assets/icons/icon_favorite.svg';
import LocationIcon from 'src/assets/icons/icon_location.svg';
import Typo from 'src/components/Typo/Typo';
import TAG from 'src/constants/tag';
import { Cafe } from 'src/models/cafe';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  Address,
  Distance,
  Info,
  InfoCount,
  InfoList,
  ItemHeader,
  ItemHeaderRight,
  ItemStyled,
  Tag,
  TagEmpty,
  TagIcon,
  tagListStyle,
  TagSeparator,
  TagSeparatorContainer,
} from './CafeListItem.styles';

interface Props extends TouchableOpacityProps {
  data: Cafe;
  hasBorder?: boolean;
}

const CafeListItem = memo(({ data, hasBorder = false, ...props }: Props) => {
  const { name, distance, address, tags, likeCount, comments } = data;

  return (
    <ItemStyled hasBorder={hasBorder} {...props}>
      <ItemHeader>
        <Typo type={FontType.BOLD_18}>{name}</Typo>
        <ItemHeaderRight>
          {distance && (
            <>
              <LocationIcon />
              <Distance>
                <Typo type={FontType.REGULAR_12}>{distance}</Typo>
              </Distance>
            </>
          )}
        </ItemHeaderRight>
      </ItemHeader>
      <Address>
        <Typo type={FontType.REGULAR_11} color={GrayColor.GRAY_300}>
          {address}
        </Typo>
      </Address>
      {tags && tags.length > 0 ? (
        <FlatList
          horizontal
          contentContainerStyle={tagListStyle}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <TagSeparatorContainer>
              <TagSeparator />
            </TagSeparatorContainer>
          )}
          data={tags}
          keyExtractor={(tag) => TAG[tag.id].name}
          renderItem={({ item }) => (
            <Tag>
              <TagIcon>{TAG[item.id].icon}</TagIcon>
              <Typo type={FontType.REGULAR_11}>{TAG[item.id].name}</Typo>
            </Tag>
          )}
        />
      ) : (
        <TagEmpty>
          <EditGrayIcon width="24" height="24" />
          <Typo type={FontType.REGULAR_11} color={GrayColor.GRAY_300}>
            ?????? ????????? ????????? ??????????????????
          </Typo>
        </TagEmpty>
      )}
      <InfoList>
        <Info>
          <FavoriteIcon />
          <InfoCount>
            <Typo type={FontType.REGULAR_12}>{likeCount !== undefined ? likeCount : 0}</Typo>
          </InfoCount>
        </Info>
        <Info>
          <CommentIcon />
          <InfoCount>
            <Typo type={FontType.REGULAR_12}>{comments.totalCount !== undefined ? comments.totalCount : 0}</Typo>
          </InfoCount>
        </Info>
      </InfoList>
    </ItemStyled>
  );
});

export default CafeListItem;
